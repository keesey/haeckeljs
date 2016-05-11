import {Character} from '../Character';
import {Set as ExtensionalSet} from '../../../sets/extensional/Set';
import {Set} from '../../../sets/Set';
import {Taxic} from '../taxonomy/Taxic';

export interface Matrix<S extends Set>
{
	characters: ExtensionalSet<Character<S>>;
	characterList: Character<S>[];
	hashMap:
	{
		[unitCharacterCompositeHash: string]: S;
	};
	taxon: Taxic;
}
