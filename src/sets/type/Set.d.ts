import {Set as BaseSet} from '../Set';

export interface Set<T> extends BaseSet
{
	contains: (element: T) => boolean;
}
