import {ExtSet} from './ExtSet';

export function forEach<T>(set: ExtSet<T>, f: (element: T) => any)
{
	if (set.size === Infinity)
	{
		throw new Error('Cannot traverse domain sets.');
	}
	/* tslint:disable:forin */
	for (let h in set.hashMap)
	/* tslint:enable:forin */
	{
		if (f(set.hashMap[h]) === false)
		{
			return;
		}
	}
}
