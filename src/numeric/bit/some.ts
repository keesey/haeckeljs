import './MEMBER_MAX';
import './Set';

export default function some(s: Set, f: (value: number) => boolean): boolean
{
	for (let i = 0; i <= MEMBER_MAX; ++i)
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
