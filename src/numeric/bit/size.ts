import './MEMBER_MAX';
import './Set';

export default function size(s: Set): number
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
