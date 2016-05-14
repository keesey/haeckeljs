import './Set';
import '../../hash';

export default function contains<T>(set: Set<T>, element: T): boolean
{
	if (set.size === Infinity)
	{
		return true;
	}
	return set.hashMap[hash(element)] !== undefined;
}
