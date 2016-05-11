import {Builder} from './Builder';
import {ExtSet} from './ExtSet';

export function union<T>(sets: ExtSet<T>[]): ExtSet<T>
{
	const n = sets.length;
	if (n === 0)
	{
		return null;
	}
	if (n === 1)
	{
		return sets[0];
	}
	const builder = new Builder<T>();
	for (let i = 0; i < n; ++i)
	{
		const set = sets[i];
		if (set)
		{
			if (set.size === Infinity)
			{
				return set;
			}
			builder.addSet(set);
		}
	}
	return builder.build();
}
