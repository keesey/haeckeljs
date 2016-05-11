import {ExtSet} from './ExtSet';
import {list} from './list';

export function singleMember<T>(set: ExtSet<T>): T
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
