/// <reference path='./DataSource.d.ts' />
/// <reference path='./Nomenclature.d.ts' />

declare namespace haeckel
{
	export interface DataSources
	{
		nomenclature: Nomenclature;
		sources: { [filename: string]: DataSource; };
	}
}
