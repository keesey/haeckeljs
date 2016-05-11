import {ExtSet} from './ExtSet';
import {hash} from '../core/hash';

export function contains<T>(set: ExtSet<T>, element: T): boolean
{
	if (set.size === Infinity)
	{
		return true;
	}
	return set.hashMap[hash(element)] !== undefined;
}
