import {BitSet} from './BitSet';
import {EMPTY_SET} from '../core/EMPTY_SET';
import {list} from './list';

export function createFromBits(bits: number): BitSet
{
	if (bits === 0)
	{
		return EMPTY_SET;
	}
	return Object.freeze({
		bits: bits,
		empty: false,
		hash: '{' + list(bits).join(',') + '}',
	});
}
