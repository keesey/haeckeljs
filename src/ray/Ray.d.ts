import {Set} from '../core/Set';
import {Point} from '../point/Point';

export interface Ray extends Set
{
	angle: number;
	origin: Point;
}
