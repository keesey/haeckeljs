/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Model.d.ts' />
/// <reference path='./Range.d.ts' />

declare namespace haeckel
{
	export interface Occurrence extends Model
	{
		count: Range;
		geo: ExtSet<GeoCoords[]>;
		time: Range;
	}
}
