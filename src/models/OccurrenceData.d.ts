/// <reference path='./GeoData.d.ts' />

declare namespace haeckel
{
	export interface OccurrenceData
	{
		count?: number | [number, number];
		geo?: GeoData;
		time?: number | [number, number];
	}
}
