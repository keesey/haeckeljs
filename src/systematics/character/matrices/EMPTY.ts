import './Matrix';
import '../taxic/Taxic';
import {EMPTY as EMPTY_LIST} from '../../../lists/EMPTY';
import {EMPTY as EMPTY_SET} from '../../../sets/EMPTY';
import '../../../sets/Set';

export default EMPTY = Object.freeze<Matrix<Set>>({
	characterList: EMPTY_LIST,
	characters: EMPTY_SET,
	hashMap: Object.freeze({}),
	taxon: EMPTY_SET,
});
