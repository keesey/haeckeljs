import './Set';
import './list';

export default function singleMember<T>(set: Set<T>): T
{
	if (set.size !== 1)
	{
		throw new Error('Not a singleton: {' + list(set).join(', ') + '}');
	}
	/* tslint:disable:forin */
	for (let h in set.hashMap)
	/* tslint:enable:forin */
	{
		return set.hashMap[h];
	}
}
