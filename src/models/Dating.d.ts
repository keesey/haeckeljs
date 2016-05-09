/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Model.d.ts' />
/// <reference path='./Range.d.ts' />
/// <reference path='./Taxic.d.ts' />

declare namespace haeckel
{
	export interface Dating extends Model
	{
		taxa: ExtSet<Taxic>;
		time: Range;
	}
}
