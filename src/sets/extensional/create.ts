import {Builder} from './Builder';
import {EMPTY_SET} from '../core/EMPTY_SET';
import {ExtSet} from './ExtSet';

export function create<T>(elements: T[]): ExtSet<T>
{
	if (elements.length === 0)
	{
		return EMPTY_SET;
	}
	return new Builder<T>()
		.addList(elements)
		.build();
}
