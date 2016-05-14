import '../points/Point';
import './Rectangle';

export default function contains(rectangle: Rectangle, point: Point): boolean
{
	return rectangle.x <= point.x && rectangle.y <= point.y && rectangle.x2 >= point.x && rectangle.y2 >= point.y;
}
