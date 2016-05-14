import './Metadata';
import {Matrix as CharacterMatrix} from '../characters/Matrix';
import '../chronology/divergences/Divergence';
import '../chronology/strata/Stratum';
import '../nomenclature/Nomenclature';
import '../phylogeny/Phylogeny';
import '../taxic/Taxic';
import {Matrix as DistanceMatrix} from '../../distances/Matrix';
import '../../sets/Set';
import {Set as ExtensionalSet} from '../../sets/extensional/Set';

export interface Source
{
	characterMatrices: { [name: string]: CharacterMatrix<Set>; };
	distanceMatrices: { [name: string]: DistanceMatrix<Taxic>; };
	divergences: { [name: string]: ExtensionalSet<Divergence>; };
	metadata: Metadata;
	nomenclature: Nomenclature;
	occurrences: CharacterMatrix<Set>;
	phylogenies: { [name: string]: Phylogeny; };
	strata: ExtensionalSet<Stratum>;
}
