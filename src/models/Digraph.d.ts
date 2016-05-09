/// <reference path='./Arc.d.ts' />
/// <reference path='./ExtSet.d.ts' />

declare namespace haeckel
{
	export type Digraph<V> = [ExtSet<V>, ExtSet<Arc<V>>];
}
