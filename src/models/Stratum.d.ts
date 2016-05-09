/// <reference path='./Model.d.ts' />
/// <reference path='./Range.d.ts' />

declare namespace haeckel
{
	export interface Stratum extends Model
	{
		type: string;
		name: string;
		start: Range;
		end: Range;
	}
}
