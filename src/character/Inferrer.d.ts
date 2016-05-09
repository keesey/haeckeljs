import {Set} from '../core/Set';
import {WeightedStates} from './WeightedStates';

export interface Inferrer<S extends Set>
{
	average: (statesList: WeightedStates<S>[]) => S;
}
