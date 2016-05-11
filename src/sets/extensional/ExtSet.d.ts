import {Set} from '../core/Set';

export interface ExtSet<T> extends Set
{
	hashMap: { [hash: string]: T; };
	size: number;
}
