/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface Range extends Set
	{
		max: number;
		mean: number;
		min: number;
		size: number;
	}
}
