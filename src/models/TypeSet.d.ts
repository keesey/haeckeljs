/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface TypeSet<T> extends Set
	{
		contains: (element: T) => boolean;
	}
}
