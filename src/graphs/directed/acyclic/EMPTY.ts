import {Edge} from './Edge';
import {Graph} from './Graph';
import {create} from '../sets/extensional/create';

export const EMPTY: Graph<any> = Object.freeze<Graph<any>>([ create<any>([]), create<Edge<any>>([]) ]);
