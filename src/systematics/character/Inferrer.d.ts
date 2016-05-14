import './weighted/States';
import '../../sets/Set';

export interface Inferrer<S extends Set>
{
	average: (statesList: States<S>[]) => S;
}
