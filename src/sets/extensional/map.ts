import Builder from './Builder';
import {Set} from './Set';

export default function<X, Y>(set: Set<X>, f: (element: X) => Y): Set<Y>
{
	if (set.size === Infinity)
	{
		throw new Error('Cannot traverse domain sets.');
	}
	const builder = new Builder<Y>();
	/* tslint:disable:forin */
	for (let h in set.hashMap)
	/* tslint:enable:forin */
	{
		builder.add(f(set.hashMap[h]));
	}
	return builder.build();
}
