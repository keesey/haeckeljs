import './Set';
import './create';

export default function read<T>(data: T | T[]): Set<T>
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
