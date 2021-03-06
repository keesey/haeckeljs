import {Set as BaseSet} from '../Set';

export interface Set<T> extends BaseSet
{
	criterion: (element: T) => boolean;
}
