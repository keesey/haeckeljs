/// <reference path='./Point.d.ts' />
/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface Rectangle extends Set
	{
		area: number;
		bottom: number;
		centerX: number;
		centerY: number;
		height: number;
		left: number;
		right: number;
		top: number;
		width: number;
		x: number;
		x2: number;
		y: number;
		y2: number;
	}
}
