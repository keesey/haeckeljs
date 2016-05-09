import {Set} from '../core/Set';

export interface IntSet<T> extends Set
{
	criterion: (element: T) => boolean;
}
