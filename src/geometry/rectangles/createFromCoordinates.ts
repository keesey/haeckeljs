import {Rectangle} from './Rectangle';
import {create} from './create';

export function createFromCoordinaess(x: number, y: number, x2: number, y2: number): Rectangle
{
	return create(x, y, x2 - x, y2 - y);
}
