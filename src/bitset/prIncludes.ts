import {BitSet} from './BitSet';

export function prIncludes(superset: BitSet, subset: BitSet): boolean
{
	return superset.bits !== subset.bits && (superset.bits & subset.bits) === subset.bits;
}
