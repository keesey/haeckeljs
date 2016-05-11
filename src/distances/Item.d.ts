import {Range} from '../sets/ranges/Range';

export interface Item<T>
{
	distance: Range;
	item: T;
}
