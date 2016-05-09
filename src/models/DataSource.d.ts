/// <reference path='./CharacterMatrix.d.ts' />
/// <reference path='./DataSourceMetadata.d.ts' />
/// <reference path='./Dating.d.ts' />
/// <reference path='./Digraph.d.ts' />
/// <reference path='./DistanceMatrix.d.ts' />
/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Nomenclature.d.ts' />
/// <reference path='./Set.d.ts' />
/// <reference path='./Stratum.d.ts' />
/// <reference path='./Taxic.d.ts' />

declare namespace haeckel
{
	export interface DataSource
	{
		characterMatrices: { [name: string]: CharacterMatrix<Set>; };
		datings: { [name: string]: ExtSet<Dating>; };
		distanceMatrices: { [name: string]: DistanceMatrix<Taxic>; };
		metadata: DataSourceMetadata;
		nomenclature: Nomenclature;
		occurrences: CharacterMatrix<Set>;
		phylogenies: { [name: string]: Digraph<Taxic>; };
		strata: ExtSet<Stratum>;
	}
}
