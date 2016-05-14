import './Arc';
import '../../sets/extensional/Set';

export type Graph<V> = [Set<V>, Set<Arc<V>>];
