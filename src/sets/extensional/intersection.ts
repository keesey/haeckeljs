import Builder from './Builder';
import {Set} from './Set';
import contains from './contains';
import forEach from './forEach';
import EMPTY from '../EMPTY';
import equal from '../../equal';

export default function<T>(a: Set<T>, b: Set<T>): Set<T>
{
	if (a.empty || b.empty)
	{
		return EMPTY;
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
