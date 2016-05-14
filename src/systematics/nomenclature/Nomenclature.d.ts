import '../taxic/Taxic';
import '../../sets/extensional/Set';

export interface Nomenclature
{
	nameMap:
	{
		[name: string]: Taxic;
	};
	names: Set<string>;
	taxa: Set<Taxic>;
}
