import '../Character';
import '../taxonomy/Taxic';
import '../../../sets/Set';
import {Set as ExtensionalSet} from '../../../sets/extensional/Set';

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
