import {equal} from '../core/equal';

export function contains<T>(list: T[], element: T): boolean
{
	for (let i = 0, n = list.length; i < n; ++i)
	{
		if (equal(list[i], element))
		{
			return true;
		}
	}
	return false;
}
