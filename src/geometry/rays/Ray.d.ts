import {Point} from '../points/Point';
import {Set} from '../../sets/Set';

export interface Ray extends Set
{
	angle: number;
	origin: Point;
}
