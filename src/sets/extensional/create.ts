import {Builder} from './Builder';
import {EMPTY} from '../EMPTY';
import {Set} from './Set';

export function create<T>(elements: T[]): Set<T>
{
	if (elements.length === 0)
	{
		return EMPTY;
	}
	return new Builder<T>()
		.addList(elements)
		.build();
}
