import './Rectangle';
import './createFromCoordinates';
import '../points/Point';

export default function createFromPoints(a: Point, b: Point): Rectangle
{
	return createFromCoordinates(a.x, a.y, b.x, b.y);
}
