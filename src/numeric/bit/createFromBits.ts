import {EMPTY} from '../../sets/EMPTY';
import {Set} from './Set';
import {list} from './list';

export function createFromBits(bits: number): Set
{
	if (bits === 0)
	{
		return EMPTY;
	}
	return Object.freeze({
		bits: bits,
		empty: false,
		hash: '{' + list(bits).join(',') + '}',
	});
}
