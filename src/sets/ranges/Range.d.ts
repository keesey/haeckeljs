import {Set} from '../core/Set';

export interface Range extends Set
{
	max: number;
	mean: number;
	min: number;
	size: number;
}
