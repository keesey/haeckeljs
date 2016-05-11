import {Set} from './Set';
import {MEMBER_MAX} from './MEMBER_MAX';

export function every(s: Set, f: (value: number) => boolean): boolean
{
	for (let i = 0; i <= MEMBER_MAX; ++i)
	{
		if (s.bits & (1 << i))
		{
			if (!f(i))
			{
				return false;
			}
		}
	}
	return true;
}
