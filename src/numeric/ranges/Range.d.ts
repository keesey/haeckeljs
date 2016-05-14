import {Set} from '../../sets/Set';

export interface Range extends Set
{
	max: number;
	mean: number;
	min: number;
	size: number;
}
