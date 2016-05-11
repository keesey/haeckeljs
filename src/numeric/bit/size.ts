import {MEMBER_MAX} from './MEMBER_MAX';
import {Set} from './Set';

export function size(s: Set): number
{
	let size = 0;
	for (let i = 0; i <= MEMBER_MAX; ++i)
	{
		if (s.bits & (1 << i))
		{
			size++;
		}
	}
	return size;
}
