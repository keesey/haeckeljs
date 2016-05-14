import '../points/Point';
import '../../sets/Set';

export interface Ray extends Set
{
	angle: number;
	origin: Point;
}
