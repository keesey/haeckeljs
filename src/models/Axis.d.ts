/// <reference path='./Range.d.ts' />

declare namespace haeckel
{
	export interface Axis
	{
		labelFunction?: (value: number) => string;
		range: Range;
		step: number;
	}
}
