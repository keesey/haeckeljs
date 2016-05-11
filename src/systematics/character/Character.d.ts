import {Entity} from '../core/Entity';
import {Inferrer} from './Inferrer';
import {Range} from '../range/Range';
import {Set} from '../core/Set';

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
