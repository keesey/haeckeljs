import {Set} from '../../sets/extensional/Set';
import {Taxic} from '../taxic/Taxic';

export interface Nomenclature
{
	nameMap:
	{
		[name: string]: Taxic;
	};
	names: Set<string>;
	taxa: Set<Taxic>;
}
