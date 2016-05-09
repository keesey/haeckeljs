import {ExtSet} from '../extset/ExtSet';
import {Taxic} from '../taxonomy/Taxic';

export interface Nomenclature
{
	nameMap:
	{
		[name: string]: Taxic;
	};
	names: ExtSet<string>;
	taxa: ExtSet<Taxic>;
}
