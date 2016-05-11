import {BitSet} from './BitSet';
import {list} from './list';

export function write(set: BitSet): number | number[]
{
	if (set === null || set === undefined)
	{
		return undefined;
	}
	const result = list(set.bits);
	return result.length === 1 ? result[0] : result;
}
