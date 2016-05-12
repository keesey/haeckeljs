import {EMPTY} from '../../sets/EMPTY';
import {Rectangle} from './Rectangle';
import {createFromCoordinates} from './createFromCoordinates';

export function combine(rectangles: Rectangle[]): Rectangle
{
	const n = rectangles.length; 
	if (n === 0)
	{
		return EMPTY_SET;
	}
	if (n === 1)
	{
		return rectangles[0];
	}
	let x = NaN;
	let x2 = NaN;
	let y = NaN;
	let y2 = NaN;
	for (let i = 0; i < n; ++i)
	{
		const rectangle = rectangles[i];
		if (!rectangle.empty)
		{
			x = isNaN(x) ? rectangle.x : Math.min(x, rectangle.x);
			x2 = isNaN(x2) ? rectangle.x2 : Math.max(x2, rectangle.x2);
			y = isNaN(y) ? rectangle.y : Math.min(y, rectangle.y);
			y2 = isNaN(y2) ? rectangle.y2 : Math.max(y2, rectangle.y2);
		}
	}
	return createFromCoordinates(x, y, x2, y2);
}
