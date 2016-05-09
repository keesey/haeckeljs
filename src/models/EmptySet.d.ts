/// <reference path='./BitSet.d.ts' />
/// <reference path='./ExtSet.d.ts' />
/// <reference path='./IntSet.d.ts' />
/// <reference path='./Range.d.ts' />
/// <reference path='./Ray.d.ts' />
/// <reference path='./Rectangle.d.ts' />
/// <reference path='./Taxic.d.ts' />
/// <reference path='./TypeSet.d.ts' />

declare namespace haeckel
{
	export interface EmptySet extends ExtSet<any>, BitSet, IntSet<any>, Range, Ray, Rectangle, Taxic, TypeSet<any>
	{
	}
}
