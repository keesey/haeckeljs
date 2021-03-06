import {Set} from '../../../sets/Set';

export interface States<S extends Set>
{
	states: S;
	weight: number;
}
