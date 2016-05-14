import {Data} from './Data';
import {Set} from './Set';
import create from './create';

export default function<T>(data: Data<T>): Set<T>
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
