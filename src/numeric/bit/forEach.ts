import {Set} from './Set';
import {MEMBER_MAX} from './MEMBER_MAX';

export function forEach(s: Set, f: (value: number) => any): void
{
	for (let i = 0; i <= MEMBER_MAX; ++i)
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
