/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface IntSet<T> extends Set
	{
		criterion: (element: T) => boolean;
	}
}
