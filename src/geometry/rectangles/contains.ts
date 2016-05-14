import {Rectangle} from './Rectangle';
import {Point} from '../points/Point';

export default function(rectangle: Rectangle, point: Point): boolean
{
	return rectangle.x <= point[0] && rectangle.y <= point[1] && rectangle.x2 >= point[0] && rectangle.y2 >= point[1];
}
