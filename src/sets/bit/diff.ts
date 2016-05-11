import {BitSet} from './BitSet';
import {createFromBits} from './createFromBits';

export function setDiff(minuend: BitSet, subtrahend: BitSet): BitSet
{
	return createFromBits((minuend.bits ^ subtrahend.bits) & minuend.bits);
}
