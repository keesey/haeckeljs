import {Arc} from './Arc';
import {Digraph} from './Digraph';
import {create} from '../sets/extensional/create';

export const EMPTY: Digraph<any> = Object.freeze<Digraph<any>>([ create<any>([]), create<Arc<any>>([]) ]);
