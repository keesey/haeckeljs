import {equal} from '../equal';

export function contains<T>(list: T[], element: T): boolean
{
	const n = list.length;
	for (let i = 0; i < n; ++i)
	{
		if (equal(list[i], element))
		{
			return true;
		}
	}
	return false;
}
