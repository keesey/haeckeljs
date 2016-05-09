import {Matrix as CharacterMatrix} from '../character/Matrix';
import {Dating} from '../dating/Dating';
import {Digraph} from '../digraph/Digraph';
import {Matrix as DistanceMatrix} from '../distance/Matrix';
import {ExtSet} from '../extset/ExtSet';
import {Metadata} from './Metadata';
import {Nomenclature} from '../nomenclature/Nomenclature';
import {Set} from '../core/Set';
import {Stratum} from '../stratigraphy/Stratum';

export interface Source
{
	characterMatrices: { [name: string]: CharacterMatrix<Set>; };
	datings: { [name: string]: ExtSet<Dating>; };
	distanceMatrices: { [name: string]: DistanceMatrix<Taxic>; };
	metadata: Metadata;
	nomenclature: Nomenclature;
	occurrences: CharacterMatrix<Set>;
	phylogenies: { [name: string]: Digraph<Taxic>; };
	strata: ExtSet<Stratum>;
}
