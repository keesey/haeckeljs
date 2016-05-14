import {Edge} from './Edge';
import {Set} from '../sets/extensional/Set';

export type Graph<V> = [Set<V>, Set<Edge<V>>];
