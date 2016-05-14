import './Set';
import './MEMBER_MAX';

export default function forEach(s: Set, f: (value: number) => any): void
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
