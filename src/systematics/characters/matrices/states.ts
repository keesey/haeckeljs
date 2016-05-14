import {Matrix} from './Matrix';
import hashMapStates from './hashMapStates';
import {Character} from '../Character';
import {Taxic} from '../../taxic/Taxic';
import {Set} from '../../../sets/Set';

export default function states<S extends Set>(matrix: Matrix<S>, taxon: Taxic, character: Character<S>): S
{
    return hashMapStates(matrix.hashMap, taxon, character);
}
