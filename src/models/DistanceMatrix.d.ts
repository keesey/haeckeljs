/// <reference path='./ExtSet.d.ts' />
/// <reference path='./Range.d.ts' />

declare namespace haeckel
{
	export interface DistanceMatrix<T>
	{
		hashMap:
		{
			[hash: string]:
			{
				[hash: string]: Range;
			};
		};
		members: ExtSet<T>;
	}
}
