import {Rectangle} from './Rectangle';

export function create(x: number, y: number, width: number, height: number): Rectangle
{
    if (isNaN(x))
    {
        throw new Error('Invalid x: ' + String(x) + '.');
    }
    if (isNaN(y))
    {
        throw new Error('Invalid y: ' + String(x) + '.');
    }
    if (isNaN(width) || width < 0)
    {
        throw new Error('Invalid width: ' + String(width) + '.');
    }
    if (isNaN(height) || height < 0)
    {
        throw new Error('Invalid height: ' + String(height) + '.');
    }
    const x2 = x + width;
    const y2 = y + height;
	return Object.freeze({
		area: width * height,
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
		y: y,
		x2: x2,
		y2: y2,
	});
}
