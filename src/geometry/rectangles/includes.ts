import {Rectangle} from './Rectangle';
import {contains} from './contains';
import {create} from '../points/create';

export function includes(a: Rectangle, b: Rectangle): boolean
{
	return a.x <= b.x && a.y <= b.y && a.x2 >= b.x && a.y2 >= b.y
		&& a.x <= b.x2 && a.y <= b.y2 && a.x2 >= b.x2 && a.y2 >= b.y2;
}
