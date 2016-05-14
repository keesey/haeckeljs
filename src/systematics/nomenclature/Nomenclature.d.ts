import {Taxic} from '../taxic/Taxic';
import {Set} from '../../sets/extensional/Set';

export interface Nomenclature
{
	nameMap:
	{
		[name: string]: Taxic;
	};
	names: Set<string>;
	taxa: Set<Taxic>;
}
