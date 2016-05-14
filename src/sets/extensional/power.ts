import Builder from './Builder';
import {Set} from './Set';
import create from './create';
import forEach from './forEach';
import list from './list';
import union from './union';
import EMPTY from '../EMPTY';

export default function power<T>(set: Set<T>): Set<Set<T>>
{
	function powerList<T>(l: T[]): Set<Set<T>>
	{
		const builder = new Builder<Set<T>>();
		const n = l.length;
		if (n === 0)
		{
			builder.add(EMPTY);
		}
		else
		{
			const first = create<T>([ l[0] ]);
			if (n === 1)
			{
				builder.add(EMPTY);
				builder.add(first);
			}
			else
			{
				forEach(powerList(l.slice(1, n)), (set2: Set<T>) =>
				{
					builder.add(set2);
					builder.add(union<T>([ first, set2 ]));
				});
			}
		}
		return builder.build();
	}

	return powerList(list(set));
}
