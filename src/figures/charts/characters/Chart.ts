import DEFAULT_STATE_STYLER from './DEFAULT_STATE_STYLER';
import {StateLabelColumnOffsetter} from './StateLabelColumnOffsetter';
import StateRenderer from './StateRenderer';
import {StateSort} from './StateSort';
import {StateStyler} from './StateStyler';
import drawUnknown from './drawUnknown';
import {Renderer} from '../../Renderer';
import Builder from '../../../dom/Builder';
import NAMESPACE from '../../../dom/svg/NAMESPACE';
import {Rectangle} from '../../../geometry/rectangles/Rectangle';
import combine from '../../../geometry/rectangles/combine';
import createFromCoordinates from '../../../geometry/rectangles/createFromCoordinates';
import {Set} from '../../../numeric/bit/Set';
import bitContains from '../../../numeric/bit/contains';
import createSet from '../../../numeric/bit/create';
import size from '../../../numeric/bit/size';
import EMPTY_SET from '../../../sets/EMPTY';
import SetBuilder from '../../../sets/extensional/Builder';
import extensionalContains from '../../../sets/extensional/contains';
import {Character} from '../../../systematics/characters/Character';
import EMPTY_MATRIX from '../../../systematics/characters/matrices/EMPTY';
import {Matrix} from '../../../systematics/characters/matrices/Matrix';
import states from '../../../systematics/characters/matrices/states';
import {Taxic} from '../../../systematics/taxic/Taxic';

export default class CharacterMatrixChart implements Renderer
{
	public area: Rectangle = EMPTY_SET;
	public characters: Character<Set>[] = [];
	public matrix = <Matrix<Set>> EMPTY_MATRIX;
	public spacingH = 4;
	public spacingV = 16;
	public stateFontSize = 11;
	public stateSort: StateSort;
	public stateSpacing = 4;
	public stateStyler: StateStyler = DEFAULT_STATE_STYLER;
	public taxa: Taxic[] = [];
	public unknownFontSize = 22;
	public getArea(character: Character<Set>, taxon: Taxic): Rectangle;
	public getArea(row: number, column: number): Rectangle;
	public getArea(a: Character<Set> | number, b: Taxic | number): Rectangle
	{
		if (typeof a === 'number' && typeof b === 'number')
		{
			if (!(a >= 0) || !(b >= 0) || a >= this.characters.length || b >= this.taxa.length)
			{
				return EMPTY_SET;
			}
			return this._getArea(<number> a, <number> b);
		}
		const row = this.characters.indexOf(<Character<Set>> a);
		if (row < 0)
		{
			return EMPTY_SET;
		}
		const column = this.taxa.indexOf(<Taxic> b);
		if (column < 0)
		{
			return EMPTY_SET;
		}
		return this._getArea(row, column);
	}
	public render(parent: Builder): Builder
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
	public stateLabelColumnOffsetter: StateLabelColumnOffsetter = () => 0;
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
		const group = builder
			.child('g');
		const statesGroup = group
			.child('g');
		let cells: number[][] = new Array(columns);
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
		cells = cells.map((cell, index) =>
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
					.filter((value, nextAndPrevIndex, array) => array.indexOf(value) === nextAndPrevIndex)
					.sort();
			}
			return cell;
		});
		const stateRendererLookup: { [state: string]: StateRenderer; } = {};
		const stateRenderers: StateRenderer[] = [];
		for (let column = 0; column < columns; ++column)
		{
			const cell = cells[column].sort(this.stateSort(row));
			const stateLookup: { [state: string]: boolean; } = {};
			for (let i = 0; i < cell.length; ++i)
			{
				const state = cell[i];
				stateLookup[String(state)] = true;
				let stateRenderer = stateRendererLookup[String(state)];
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
