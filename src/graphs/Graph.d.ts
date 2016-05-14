import './Edge';
import '../sets/extensional/Set';

export type Graph<V> = [Set<V>, Set<Edge<V>>];
