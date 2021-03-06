import {Rectangle} from './Rectangle';
import EMPTY from '../../sets/EMPTY';

export default function(x: number, y: number, width: number, height: number): Rectangle
{
	if (isNaN(x) || typeof x !== 'number')
	{
		throw new Error('Invalid x: ' + String(x) + '.');
	}
	if (isNaN(y) || typeof y !== 'number')
	{
		throw new Error('Invalid y: ' + String(x) + '.');
	}
	if (isNaN(width) || typeof width !== 'number' || width < 0)
	{
		throw new Error('Invalid width: ' + String(width) + '.');
	}
	if (isNaN(height) || typeof height !== 'number' || height < 0)
	{
		throw new Error('Invalid height: ' + String(height) + '.');
	}
	const area = width * height;
	if (area === 0)
	{
		return EMPTY;
	}
	const x2 = x + width;
	const y2 = y + height;
	return Object.freeze({
		area: area,
		bottom: y2,
		centerX: x + (width / 2),
		centerY: y + (height / 2),
		empty: false,
		hash: '[[' + x + ',' + y + '],[' + x2 + ',' + y2 + ']]',
		height: height,
		left: x,
		right: x2,
		top: y,
		width: width,
		x: x,
		x2: x2,
		y: y,
		y2: y2,
	});
}
