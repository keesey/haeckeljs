import {BLACK} from '../../colors/BLACK';
import {Builder} from '../../../dom/Builder';
import {Chart} from './Chart';
import {NAMESPACE} from '../../../dom/svg/NAMESPACE';
import {Renderer} from '../../Renderer';
import {STATE_LABEL_COLOR_CUTOFF} from './STATE_LABEL_COLOR_CUTOFF';
import {WHITE} from '../../colors/WHITE';
import {hex} from '../../colors/hex';

export class StateRenderer implements Renderer
{
	private columnY: {
		[column: string]: {
			top: number;
			bottom: number;
		};
	} = {};
	private maxColumn = NaN;
	private minColumn = NaN;
	private minKnownColumn = NaN;
	private rowHeight: number;
	private rowTop: number;
	constructor(
		private chart: Chart,
		private row: number,
		private state: number,
		private totalStates: number,
		private label: string,
		private stateSpacing: number,
		private cornerRadius: number,
		private fontSize: number,
		private columnOffset: number)
	{
		const firstCell = chart.getArea(row, 0);
		this.rowHeight = firstCell.height;
		this.rowTop = firstCell.top;
	}
	setRatio(column: number, top: number, bottom: number, unknown: boolean)
	{
		if (isNaN(this.maxColumn) || column > this.maxColumn)
		{
			this.maxColumn = column;
		}
		if (isNaN(this.minColumn) || column < this.minColumn)
		{
			this.minColumn = column;
		}
		if (!unknown)
		{
			if (isNaN(this.minKnownColumn) || column < this.minKnownColumn)
			{
				this.minKnownColumn = column;
			}
		}
		this.columnY[String(column)] = {
			top: this.rowTop + (1 - bottom) * (this.rowHeight + this.stateSpacing),
			bottom: this.rowTop - this.stateSpacing + (1 - top) * (this.rowHeight + this.stateSpacing)
		};
	}
	render(builder: Builder): Builder
	{
		if (isNaN(this.maxColumn) || isNaN(this.minColumn))
		{
			return builder;
		}
		// top edge
		let area = this.chart.getArea(this.row, this.minColumn);
		if (area.empty)
		{
			throw new Error('No area for row ' + this.row + ', column ' + this.minColumn + '.');
		}
		const group = element
			.child(NAMESPACE, 'g')
			.attrs({
				'font-size': this.fontSize + 'px',
				'font-weight': 'bold',
			});
		let columnY = this.columnY[String(this.minColumn)];
		let d =
			'M' + [area.left, columnY.top + this.cornerRadius].join(' ') +
			'Q' + [area.left, columnY.top, area.left + this.cornerRadius, columnY.top].join(' ') +
			'H' + (area.right - this.cornerRadius);
		if (this.minColumn !== this.maxColumn)
		{
			for (let column = this.minColumn + 1; column <= this.maxColumn; ++column)
			{
				const lastTop = columnY.top;
				const lastArea = area;
				columnY = this.columnY[String(column)];
				area = this.chart.getArea(this.row, column);
				if (lastTop !== columnY.top)
				{
					if (Math.abs(lastTop - columnY.top) <= this.cornerRadius * 2)
					{
						d +=
							'Q' + [lastArea.right, lastTop, lastArea.right, (lastTop + columnY.top) / 2].join(' ') +
							'Q' + [lastArea.right, columnY.top, lastArea.right + this.cornerRadius, columnY.top].join(' ');
					}
					else if (lastTop < columnY.top)
					{
						d +=
							'Q' + [lastArea.right, lastTop, lastArea.right, lastTop + this.cornerRadius].join(' ') +
							'V' + (columnY.top - this.cornerRadius) +
							'Q' + [lastArea.right, columnY.top, lastArea.right + this.cornerRadius, columnY.top].join(' ');
					}
					else
					{
						d +=
							'h' + this.cornerRadius + 
							'Q' + [lastArea.right + this.cornerRadius, lastTop, lastArea.right + this.cornerRadius, lastTop - this.cornerRadius].join(' ') +
							'V' + (columnY.top + this.cornerRadius) +
							'Q' + [lastArea.right + this.cornerRadius, columnY.top, lastArea.right + this.cornerRadius * 2, columnY.top].join(' ');
					}
				}
				d += 'H' + (area.right - this.cornerRadius);
			}
		}
		d +=
			'Q' + [area.right, columnY.top, area.right, columnY.top + this.cornerRadius].join(' ') +
			'V' + (columnY.bottom - this.cornerRadius);
		// bottom edge
		d +=
			'Q' + [area.right, columnY.bottom, area.right - this.cornerRadius, columnY.bottom].join(' ') +
			'H' + (area.left + this.cornerRadius);
		if (this.minColumn !== this.maxColumn)
		{
			for (let column = this.maxColumn - 1; column >= this.minColumn; --column)
			{
				const lastBottom = columnY.bottom;
				const lastArea = area;
				columnY = this.columnY[String(column)];
				area = this.chart.getArea(this.row, column);
				if (lastBottom !== columnY.bottom)
				{
					if (Math.abs(lastBottom - columnY.bottom) <= this.cornerRadius * 2)
					{
						d +=
							'Q' + [lastArea.left, lastBottom, lastArea.left, (lastBottom + columnY.bottom) / 2].join(' ') +
							'Q' + [lastArea.left, columnY.bottom, lastArea.left - this.cornerRadius, columnY.bottom].join(' ');
					}
					else if (lastBottom < columnY.bottom)
					{
						d +=
							'H' + lastArea.left +
							'Q' + [lastArea.left - this.cornerRadius, lastBottom, lastArea.left - this.cornerRadius, lastBottom + this.cornerRadius].join(' ') +
							'V' + (columnY.bottom - this.cornerRadius) +
							'Q' + [lastArea.left - this.cornerRadius, columnY.bottom, lastArea.left - this.cornerRadius * 2, columnY.bottom].join(' ');
					}
					else
					{
						d +=
							'Q' + [lastArea.left, lastBottom, lastArea.left, lastBottom - this.cornerRadius].join(' ') +
							'V' + (columnY.bottom + this.cornerRadius) +
							'Q' + [lastArea.left, columnY.bottom, lastArea.left - this.cornerRadius, columnY.bottom].join(' ');
					}
				}
				d += 'H' + (area.left + this.cornerRadius);
			}
		}
		d +=
			'Q' + [area.left, columnY.bottom, area.left, columnY.bottom - this.cornerRadius].join(' ') +
			'V' + (columnY.top + this.cornerRadius) +
			'Z';
		group
			.child('path')
			.attr('d', d)
			.attrs(this.chart.stateStyler(this.state, this.totalStates));
		if (this.label)
		{
			area = this.chart.getArea(this.row, this.minKnownColumn + this.columnOffset);
			columnY = this.columnY[String(this.minKnownColumn)];
			const label = group
				.child('text')
				.attrs({
					fill: (this.state / (this.totalStates - 1) <= STATE_LABEL_COLOR_CUTOFF) ? hex(WHITE) : hex(BLACK),
					'text-anchor': 'start',
					x: (area.left + this.cornerRadius * 4) + 'px',
					y: Math.min(columnY.top + this.cornerRadius + this.fontSize, columnY.bottom - this.cornerRadius * 2) + 'px',
				});
			this.label
				.split(/\n+/g)
				.forEach((word, index) =>
				{
					label
						.child('tspan')
						.text(word)
						.attrs({
							dy: index ? this.fontSize + 'px' : 0,
							x: (area.left + this.cornerRadius * 4) + 'px',
						});
				});
				// :TODO: custom style
		}
		return group;
	}
}
