/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Taxic.d.ts' />

declare namespace haeckel
{
	export interface Nomenclature
	{
		nameMap:
		{
			[name: string]: Taxic;
		};
		names: ExtSet<string>;
		taxa: ExtSet<Taxic>;
	}
}
