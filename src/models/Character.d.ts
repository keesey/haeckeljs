/// <reference path='./Entity.d.ts' />
/// <reference path='./Inferrer.d.ts' />
/// <reference path='./Range.d.ts' />
/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface Character<S extends Set> extends Entity
	{
		combine: (statesList: S[]) => S;
		domain: S;
		distance?: (statesA: S, statesB: S) => Range;
		inferrer?: Inferrer<S>;
		intersect: (statesList: S[]) => S;
		label?: string;
		labelStates?: (states: S) => string;
		overlap: (statesA: S, statesB: S) => boolean;
		readStates: (data: any) => S;
		stateLabels?: string[];
		type?: string;
		writeStates: (states: S) => any;
	}
}
