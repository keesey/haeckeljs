import {Range} from '../range/Range';

export interface Item<T>
{
	distance: Range;
	item: T;
}
