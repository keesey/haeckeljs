import {Set} from '../core/Set';

export interface TypeSet<T> extends Set
{
	contains: (element: T) => boolean;
}
