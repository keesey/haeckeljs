import './Set';

export default function list<T>(set: Set<T>): T[]
{
	if (set.size === Infinity)
	{
		throw new Error('Cannot traverse domain sets.');
	}
	if (set === null || typeof set === 'undefined')
	{
		return undefined;
	}
	if (set.empty)
	{
		return [];
	}
	const l: T[] = new Array(set.size);
	let i = 0;
	/* tslint:disable:forin */
	for (let h in set.hashMap)
	/* tslint:enable:forin */
	{
		l[i++] = set.hashMap[h];
	}
	return l;
}
