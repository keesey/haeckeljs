import {Metadata} from './Metadata';
import {Matrix as CharacterMatrix} from '../characters/matrices/Matrix';
import {Divergence} from '../chronology/divergences/Divergence';
import {Stratum} from '../chronology/strata/Stratum';
import {Nomenclature} from '../nomenclature/Nomenclature';
import {Phylogeny} from '../phylogeny/Phylogeny';
import {Taxic} from '../taxic/Taxic';
import {Matrix as DistanceMatrix} from '../../distances/Matrix';
import {Set} from '../../sets/Set';
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
