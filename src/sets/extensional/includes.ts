import {Set} from './Set';

export function includes<T>(a: Set<T>, b: Set<T>): boolean
{
	if (a.hash === b.hash)
	{
		return true;
	}
	if (b.size >= a.size)
	{
		return false;
	}
	if (a.size === Infinity)
	{
		return true;
	}
	/* tslint:disable:forin */
	for (let h in b.hashMap)
	/* tslint:enable:forin */
	{
		if (a.hashMap[h] === undefined)
		{
			return false;
		}
	}
	return true;
}
