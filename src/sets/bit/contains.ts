import {BitSet} from './BitSet';

export function contains(s: BitSet, n: number): boolean
{
	return (s.bits & (1 << n)) !== 0;
}
