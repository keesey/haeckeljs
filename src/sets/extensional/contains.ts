import {Set} from './Set';
import {hash} from '../../hash';

export function contains<T>(set: Set<T>, element: T): boolean
{
	if (set.size === Infinity)
	{
		return true;
	}
	return set.hashMap[hash(element)] !== undefined;
}
