import {Set as BaseSet} from '../Set';

export interface Set<T> extends BaseSet
{
	hashMap: { [hash: string]: T; };
	size: number;
}
