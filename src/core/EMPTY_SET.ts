import {EmptySet} from './EmptySet';
import {Point} from '../point/Point';

export const EMPTY_SET = (function ()
{
	const filter = (element: any) => false;
	const e: EmptySet =
		{
			angle: NaN,
			area: 0,
			bits: 0,
			bottom: NaN,
			centerX: NaN,
			centerY: NaN,
			contains: filter,
			criterion: filter,
			empty: true,
			entities: null,
			hash: '{}',
			hashMap: <{ [hash: string]: any }>Object.freeze({}),
			height: 0,
			isUnit: false,
			left: NaN,
			max: NaN,
			mean: NaN,
			min: NaN,
			origin: Object.freeze<Point>([NaN, NaN]),
			right: NaN,
			size: 0,
			top: NaN,
			units: null,
			width: 0,
			x: NaN,
			x2: NaN,
			y: NaN,
			y2: NaN,
		};
	e.units = e.entities = e;
	return Object.freeze(e);
})();
