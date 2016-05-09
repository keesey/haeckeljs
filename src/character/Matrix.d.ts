import {Character} from '../character/Character';
import {ExtSet} from '../extset/ExtSet';
import {Set} from '../core/Set';
import {Taxic} from '../taxonomy/Taxic';

export interface Matrix<S extends Set>
{
	characters: ExtSet<Character<S>>;
	characterList: Character<S>[];
	hashMap:
	{
		[unitCharacterCompositeHash: string]: S;
	};
	taxon: Taxic;
}
