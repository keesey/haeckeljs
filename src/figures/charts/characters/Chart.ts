import {Builder} from '../../../dom/Builder';
import {Character} from '../../../systematics/characters/Character';
import {DEFAULT_STATE_STYLER} from './DEFAULT_STATE_STYLER';
import {EMPTY as EMPTY_MATRIX} from '../../../systematics/characters/matrices/EMPTY';
import {EMPTY as EMPTY_SET} from '../../../sets/EMPTY';
import {Matrix} from '../../../systematics/characters/matrices/Matrix';
import {NAMESPACE} from '../../../dom/svg/NAMESPACE';
import {Rectangle} from '../../../geometry/rectangles/Rectangle';
import {Renderer} from '../../Renderer';
import {Set} from '../../../numeric/sets/bit/Set';
import {Builder as SetBuilder} from '../../../numeric/sets/extensional/Builder';
import {StateLabelColumnOffsetter} from './StateLabelColumnOffsetter';
import {StateRenderer} from './StateRenderer';
import {StateSort} from './StateSort';
import {StateStyler} from './StateStyler';
import {Taxic} from '../../../systematics/taxic/Taxic';
import {combine} from '../../../geometry/rectangles/combine';
import {contains as bitContains} from '../../../numeric/bit/contains';
import {create as createSet} from '../../../numeric/sets/bit/create';
import {createFromCoordinates} from '../../../geometry/rectangles/createFromCoordinates';
import {contains as extensionalContains} from '../../../sets/extensional/contains';
import {drawUnknown} from './drawUnknown';
import {size} from '../../../numeric/bit/size';
import {states} from '../../../systematics/characters/matrices/states';

export class CharacterMatrixChart implements Renderer
{
	area: Rectangle = EMPTY_SET;
	characters: Character<Set>[] = [];
	matrix = <Matrix<Set>> EMPTY_MATRIX;
	spacingH = 4;
	spacingV = 16;
	stateFontSize = 11;
	stateLabelColumnOffsetter: StateLabelColumnOffsetter = () => 0;
	stateSort: StateSort;
	stateSpacing = 4;
	stateStyler: StateStyler = DEFAULT_STATE_STYLER;
	taxa: Taxic[] = [];
	unknownFontSize = 22;
	getArea(character: Character<Set>, taxon: Taxic): Rectangle;
	getArea(row: number, column: number): Rectangle;
	getArea(a: Character<Set> | number, b: Taxic | number): Rectangle
	{
		if (typeof a === 'number' && typeof b === 'number')
		{
			if (!(a >= 0) || !(b >= 0) || a >= this.characters.length || b >= this.taxa.length)
			{
				return EMPTY_SET;
			}
			return this._getArea(<number> a, <number> b);
		}
		const row = this.characters.indexOf(a);
		if (row < 0)
		{
			return EMPTY_SET;
		}
		const column = this.taxa.indexOf(b);
		if (column < 0)
		{
			return EMPTY_SET;
		}
		return this._getArea(row, column);
	}
	render(parent: Builder): Builder
	{
		const group = parent
			.child(NAMESPACE, 'g');
		const n = this.characters.length;
		for (let i = 0; i < n; ++i)
		{
			this.renderCharacter(group, this.characters[i], i);
		}
		return group;
	}
	private _getArea(row: number, column: number): Rectangle
	{
		const rows = this.characters.length;
		const columns = this.taxa.length;
		if (rows === 0 || columns === 0)
		{
			return EMPTY_SET;
		}
		const w = (this.area.width - this.spacingH * (columns - 1)) / columns;
		const h = (this.area.height - this.spacingV * (rows - 1)) / rows;
		const x = this.area.left + (w + this.spacingH) * column;
		const y = this.area.top + (h + this.spacingV) * row;
		return createFromCoordinates(x, y, x + w, y + h);
	}
	private renderCharacter(builder: Builder, character: Character<Set>, row: number)
	{
		const columns = this.taxa.length;
		if (!(columns > 0))
		{
			return;
		}
		const numStates = size(character.domain);
		if (!(numStates > 0))
		{
			return;
		}
		const group = element
			.child('g');
		const statesGroup = g
			.child('g');
		const cells: number[][] = new Array(columns);
		const unknownsBuilder = new SetBuilder<number>();
		for (let column = 0; column < columns; ++column)
		{
			const taxon = this.taxa[column];
			const taxonStates = states(this.matrix, taxon, character);
			if (taxonStates === null)
			{
				cells[column] = null;
				unknownsBuilder.add(column);
			}
			else
			{
				const cell: number[] = [];
				for (let state = 0; state < numStates; ++state)
				{
					if (bitContains(taxonStates, state))
					{
						cell.push(state);
					}
				}
				cells[column] = cell;
			}
		}
		cells = cells.map((cell, index, cells) =>
		{
			function next()
			{
				for (let i = index + 1; i < cells.length; ++i)
				{
					if (cells[i])
					{
						return cells[i];
					}
				}
				return [];
			}
			function prev()
			{
				for (let i = index - 1; i >= 0; --i)
				{
					if (cells[i])
					{
						return cells[i];
					}
				}
				return [];
			}
			if (!cell)
			{
				return next()
					.concat(prev())
					.filter((value, index, array) => array.indexOf(value) === index)
					.sort();
			}
			return cell;
		});
		const stateRendererLookup: { [state: string]: StateRenderer; } = {};
		const stateRenderers: StateRenderer[] = [];
		for (let column = 0; column < columns; ++column)
		{
			const taxon = this.taxa[column];
			const cell = cells[column].sort(this.stateSort(row));
			const stateLookup: { [state: string]: boolean; } = {};
			for (let i = 0; i < cell.length; ++i)
			{
				state = cell[i];
				stateLookup[String(state)] = true;
				var stateRenderer = stateRendererLookup[String(state)];
				if (!stateRenderer)
				{
					stateRendererLookup[String(state)] = stateRenderer
						= new StateRenderer(this, row, state, numStates, character.labelStates(createSet([ state ])),
							this.stateSpacing, this.spacingH, this.stateFontSize, this.stateLabelColumnOffsetter(row, i));
					stateRenderers.push(stateRenderer);
				}
				stateRenderer.setRatio(column, i / cell.length, (i + 1) / cell.length, unknownsBuilder.contains(column));
			}
			/* tslint:disable:forin */
			for (let stateString in stateRendererLookup)
			/* tslint:enable:forin */
			{
				if (!stateLookup[stateString])
				{
					delete stateRendererLookup[stateString];
				}
			}
		}
		stateRenderers.forEach(renderer => renderer.render(statesGroup));
		const unknowns = unknownsBuilder.build();
		if (!unknowns.empty)
		{
			const unknownsGroup = group
				.child('g');
			for (let column = 0; column < columns; ++column)
			{
				if (!extensionalContains(unknowns, column)) {
					continue;
				}
				const start = column;
				while (column < columns && extensionalContains(unknowns, column + 1))
				{
					++column;
				}
				const area = combine([ this._getArea(row, start), this._getArea(row, column) ]);
				drawUnknown(unknownsGroup, area, this.spacingH, this.spacingV, this.unknownFontSize);
			}
		}
	}
}
