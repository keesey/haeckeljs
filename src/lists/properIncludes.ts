import equal from '../equal';

export default function<T>(a: T[], b: T[]): boolean
{
	const an = a.length;
	const bn = b.length;
	if (bn >= an)
	{
		return false;
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
