import {States} from './States';
import {Set} from '../../../sets/Set';

export interface Inferrer<S extends Set>
{
	average: (statesList: States<S>[]) => S;
}
