import {Set} from '../core/Set';

export interface WeightedStates<S extends Set>
{
	states: S;
	weight: number;
}
