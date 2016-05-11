import {ExtSet} from './ExtSet';
import {create} from './create';

export function read<T>(data: T | T[]): ExtSet<T>
{
	if (data === null || data === undefined)
	{
		return null;
	}
	if (Array.isArray(data))
	{
		return create<T>(<T[]> data);
	}
	return create<T>([ <T> data ]);
}
