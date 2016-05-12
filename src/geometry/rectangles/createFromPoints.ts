import {Point} from '../points/Point';
import {Rectangle} from './Rectangle';
import {createFromCoordinates} from './createFromCoordinates';

export function createFromPoints(a: Point, b: Point): Rectangle
{
	return createFromCoordinates(a.x, a.y, b.x, b.y);
}
