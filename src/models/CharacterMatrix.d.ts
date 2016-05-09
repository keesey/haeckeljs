/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Character.d.ts' />
/// <reference path='./Set.d.ts' />
/// <reference path='./Taxic.d.ts' />

declare namespace haeckel
{
	export interface CharacterMatrix<S extends Set>
	{
		characters: ExtSet<Character<S>>;
		characterList: Character<S>[];
		hashMap:
		{
			[unitCharacterCompositeHash: string]: S;
		};
		taxon: Taxic;
	}
}
