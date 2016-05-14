import './Builder';
import '../EMPTY';
import './Set';

export default function create<T>(elements: T[]): Set<T>
{
	if (elements.length === 0)
	{
		return EMPTY;
	}
	return new Builder<T>()
		.addList(elements)
		.build();
}
