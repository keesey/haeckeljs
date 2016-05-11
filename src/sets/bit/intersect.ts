import {BitSet} from './BitSet';
import {createFromBits} from './createFromBits';

export function intersect(a: BitSet, b: BitSet): BitSet
{
	return createFromBits(a.bits & b.bits);
}
