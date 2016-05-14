import {Set} from './Set';
import list from './list';
import EMPTY from '../../sets/EMPTY';

export default function(bits: number): Set
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
