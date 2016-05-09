import {BIT_MEMBER_MAX} from './BIT_MEMBER_MAX';
import {BitSet} from './BitSet';

export function size(s: BitSet): number
{
	let size = 0;
	for (let i = 0; i <= BIT_MEMBER_MAX; ++i)
	{
		if (s.bits & (1 << i))
		{
			size++;
		}
	}
	return size;
}
