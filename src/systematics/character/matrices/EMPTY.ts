import {EMPTY as EMPTY_LIST} from '../../../lists/EMPTY';
import {EMPTY as EMPTY_SET} from '../../../sets/EMPTY';
import {Matrix} from './Matrix';
import {Set} from '../../../sets/Set';
import {Taxic} from '../taxonomy/Taxic';

export const EMPTY = Object.freeze<Matrix<Set>>({
	characters: EMPTY_SET,
	characterList: EMPTY_LIST,
	hashMap: Object.freeze({}),
	taxon: EMPTY_SET
});
