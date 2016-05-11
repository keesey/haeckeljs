import {Arc} from './Arc';
import {ExtSet} from '../extset/ExtSet';

export type Digraph<V> = [ExtSet<V>, ExtSet<Arc<V>>];
