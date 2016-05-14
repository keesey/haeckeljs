import Builder from './Builder';
import {Set} from './Set';
import EMPTY from '../EMPTY';

export default function<T>(elements: T[]): Set<T>
{
	if (elements.length === 0)
	{
		return EMPTY;
	}
	return new Builder<T>()
		.addList(elements)
		.build();
}
