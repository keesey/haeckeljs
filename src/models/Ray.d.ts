/// <reference path='./Point.d.ts' />
/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface Ray extends Set
	{
		angle: number;
		origin: Point;
	}
}
