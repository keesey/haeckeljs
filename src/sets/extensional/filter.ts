import './Builder';
import './Set';

export default function filter<T>(set: Set<T>, f: (element: T) => boolean): Set<T>
{
	if (set.size === Infinity)
	{
		throw new Error('Cannot traverse domain sets.');
	}
	const builder = new Builder<T>();
	/* tslint:disable:forin */
	for (let h in set.hashMap)
	/* tslint:enable:forin */
	{
		const element = set.hashMap[h];
		if (f(element))
		{
			builder.add(element);
		}
	}
	return builder.build();
}
