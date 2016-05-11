import {BLACK} from '../../colors/BLACK';
import {Builder} from '../../../dom/Builder.ts';
import {NAMESPACE} from '../../../dom/svg/NAMESPACE.ts';
import {Rectangle} from '../../../geometry/rectangles/Rectangle';
import {WHITE} from '../../colors/WHITE';
import {hex} from '../../colors/hex';

function drawUnknown(element: Builder, area: Rectangle, spacingH: number, spacingV: number, fontSize: number)
{
	// :TODO: Customizable renderer
	const group = element
		.child(SVG_NS, 'g')
		.attrs({
			'font-size': fontSize + 'px',
			'font-weight': 'bold',
		});
	group
		.child('rect')
		.attrs({
			fill: hex(WHITE),
			height: (area.height + spacingV * 2 - 2) + 'px',
			width: (area.width - spacingH * 2) + 'px',
			x: (area.left + spacingH) + 'px',
			y: (area.top - spacingV + 1) + 'px',
		});
	group
		.child('line')
		.attrs({
			stroke: hex(BLACK),
			'stroke-width': '2px',
			'stroke-dasharray': '2 2',
			x1: (area.left + spacingH) + 'px',
			x2: (area.left + spacingH) + 'px',
			y1: (area.top - spacingV) + 'px',
			y2: (area.bottom + spacingV) + 'px',
		});
	group
		.child('line')
		.attrs({
			stroke: hex(BLACK),
			'stroke-width': '2px',
			'stroke-dasharray': '2 2'
			x1: (area.right - spacingH) + 'px',
			x2: (area.right - spacingH) + 'px',
			y1: (area.top - spacingV) + 'px',
			y2: (area.bottom + spacingV) + 'px',
		});
	group
		.child('text')
		.attrs({
			fill: BLACK.hex,
			'text-anchor': 'middle',
			x: area.centerX + 'px',
			y: (area.centerY + fontSize / 2) + 'px',
		})
		.text('?');
}
