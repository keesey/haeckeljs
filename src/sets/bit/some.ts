import {BIT_MEMBER_MAX} from './BIT_MEMBER_MAX';
import {BitSet} from './BitSet';

export function some(s: BitSet, f: (value: number) => boolean): boolean
{
	for (let i = 0; i <= BIT_MEMBER_MAX; ++i)
	{
		if (s.bits & (1 << i))
		{
			if (f(i))
			{
				return true;
			}
		}
	}
	return false;
}
