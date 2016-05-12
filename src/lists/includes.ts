import {equal} from '../equal';

export function includes<T>(a: T[], b: T[]): boolean
{
	const an = a.length;
	const bn = b.length;
	if (bn > an)
	{
		return false;
	}
	if (an === bn)
	{
		return equal(a, b);
	}
	const n = an - bn;
	for (let i = 0; i <= n; ++i)
	{
		if (equal(b, a.slice(i, bn)))
		{
			return true;
		}
	}
	return false;
}
