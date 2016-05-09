import {BIT_MEMBER_MAX} from './BIT_MEMBER_MAX';
import {BitSet} from './BitSet';

export function list(bits: number): number[];
export function list(s: BitSet): number[];
export function list(s: number | BitSet): number[]
{
	const bits: number = typeof s === 'number' ? (<number> s) : (<BitSet> s).bits;
	const result: number[] = [];
	for (let i = 0, b = 1; i < BIT_MEMBER_MAX; ++i)
	{
		if ((bits & b) !== 0)
		{
			result.push(i);
		}
		b <<= 1;
	}
	return result;
}
