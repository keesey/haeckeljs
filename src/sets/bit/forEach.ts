import {BIT_MEMBER_MAX} from './BIT_MEMBER_MAX';
import {BitSet} from './BitSet';

export function forEach(s: BitSet, f: (value: number) => any): void
{
	for (let i = 0; i <= BIT_MEMBER_MAX; ++i)
	{
		if (s.bits & (1 << i))
		{
			if (f(i) === false)
			{
				return;
			}
		}
	}
}
