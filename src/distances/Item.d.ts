import '../numeric/ranges/Range';

export interface Item<T>
{
	distance: Range;
	item: T;
}
