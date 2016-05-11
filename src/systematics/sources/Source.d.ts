import {Matrix as CharacterMatrix} from '../characters/Matrix';
import {Divergence} from '../chronology/divergences/Divergence';
import {Matrix as DistanceMatrix} from '../../distances/Matrix';
import {Set as ExtensionalSet} from '../../sets/extensional/Set';
import {Metadata} from './Metadata';
import {Nomenclature} from '../nomenclature/Nomenclature';
import {Phylogeny} from '../phylogeny/Phylogeny';
import {Set} from '../core/Set';
import {Stratum} from '../chronology/strata/Stratum';
import {Taxic} from '../taxic/Taxic';

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
