import {Arc} from './Arc';
import {Set} from '../../sets/extensional/Set';

export type Graph<V> = [Set<V>, Set<Arc<V>>];
