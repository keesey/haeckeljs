import {Builder} from './Builder';
import {EMPTY_SET} from '../core/EMPTY_SET';
import {ExtSet} from './ExtSet';
import {contains} from './contains';
import {equal} from '../core/equal';
import {forEach} from './forEach';

export function intersect<T>(a: ExtSet<T>, b: ExtSet<T>): ExtSet<T>
{
	if (a.empty || b.empty)
	{
		return EMPTY_SET;
	}
	if (equal(a, b))
	{
		return a;
	}
	if (a.size === Infinity)
	{
		return a;
	}
	if (b.size === Infinity)
	{
		return b;
	}
	const builder = new Builder<T>();
	if (a.size <= b.size)
	{
		forEach(a, element =>
		{
			if (contains(b, element))
			{
				builder.add(element);
			}
		});
	}
	else
	{
		forEach(b, element =>
		{
			if (contains(a, element))
			{
				builder.add(element);
			}
		});
	}
	return builder.build();
}
