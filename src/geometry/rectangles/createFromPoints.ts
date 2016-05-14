import {Rectangle} from './Rectangle';
import createFromCoordinates from './createFromCoordinates';
import {Point} from '../points/Point';

export default function(a: Point, b: Point): Rectangle
{
	return createFromCoordinates(a[0], a[1], b[0], b[1]);
}
