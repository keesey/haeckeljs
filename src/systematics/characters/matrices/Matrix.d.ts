import {Character} from '../Character';
import {Taxic} from '../../taxic/Taxic';
import {Set} from '../../../sets/Set';
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
