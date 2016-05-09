/// <reference path='./Set.d.ts'/>
/// <reference path='./WeightedStates.d.ts'/>

declare namespace haeckel
{
	export interface Inferrer<S extends Set>
	{
		average: (statesList: WeightedStates<S>[]) => S;
	}
}
