import './Builder';
import './Set';
import './contains';
import './forEach';
import '../EMPTY';
import '../../equal';

export default function intersection<T>(a: Set<T>, b: Set<T>): Set<T>
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
