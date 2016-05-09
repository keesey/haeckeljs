/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Range.d.ts' />

declare namespace haeckel
{
	export interface DistanceAxis
	{
		distance: Range;
		endpoints: ExtSet<number>;
	}
}
