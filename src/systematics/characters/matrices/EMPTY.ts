import {Matrix} from './Matrix';
import {Character} from '../Character';
import {Taxic} from '../../taxic/Taxic';
import EMPTY_LIST from '../../../lists/EMPTY';
import EMPTY_SET from '../../../sets/EMPTY';
import {Set} from '../../../sets/Set';

export default Object.freeze<Matrix<Set>>({
	characterList: <Character<Set>[]> EMPTY_LIST,
	characters: EMPTY_SET,
	hashMap: Object.freeze<{ [unitCharacterCompositeHash: string]: Set; }>({}),
	taxon: EMPTY_SET,
});
