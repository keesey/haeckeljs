/// <reference path='./Set.d.ts' />

declare namespace haeckel
{
	export interface ExtSet<T> extends Set
	{
		hashMap: { [hash: string]: T; };
		size: number;
	}
}
