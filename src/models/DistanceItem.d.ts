/// <reference path='./Range.d.ts' />

declare namespace haeckel
{
	export interface DistanceItem<T>
	{
		distance: Range;
		item: T;
	}
}
