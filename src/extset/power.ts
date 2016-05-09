import {Builder} from './Builder';
import {EMPTY_SET} from '../core/EMPTY_SET';
import {ExtSet} from './ExtSet';
import {create} from './create';
import {forEach} from './forEach';
import {list} from './list';
import {union} from './union';

export function power<T>(set: ExtSet<T>): ExtSet<ExtSet<T>>
{
	function powerList<T>(l: T[]): ExtSet<ExtSet<T>>
	{
		const builder = new Builder<ExtSet<T>>();
		const n = l.length;
		if (n === 0)
		{
			builder.add(EMPTY_SET);
		}
		else
		{
			const first = create<T>([ l[0] ]);
			if (n === 1)
			{
				builder.add(EMPTY_SET);
				builder.add(first);
			}
			else
			{
				forEach(powerList(l.slice(1, n)), (set2: ExtSet<T>) =>
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
