import {Builder} from './Builder';
import {ExtSet} from './ExtSet';

export function map<X, Y>(set: ExtSet<X>, f: (element: X) => Y): ExtSet<Y>
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
