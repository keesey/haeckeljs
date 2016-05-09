/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface WeightedStates<S extends Set>
	{
		states: S;
		weight: number;
	}
}
