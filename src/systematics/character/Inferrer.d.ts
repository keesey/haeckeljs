import {Set} from '../../sets/Set';
import {States} from './weighted/States';

export interface Inferrer<S extends Set>
{
	average: (statesList: States<S>[]) => S;
}
