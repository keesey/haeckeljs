/// <reference path='./Entity.d.ts' />
/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface Taxic extends Set
	{
		entities: ExtSet<Entity>;
		isUnit: boolean;
		units: ExtSet<Taxic>;
	}
}
