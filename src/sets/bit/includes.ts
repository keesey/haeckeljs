import {BitSet} from './BitSet';

export function includes(superset: BitSet, subset: BitSet): boolean
{
	return (superset.bits & subset.bits) === subset.bits;
}
