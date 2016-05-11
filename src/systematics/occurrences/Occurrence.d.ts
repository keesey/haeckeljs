import {Model} from '../core/Model';
import {Range} from '../range/Range';
import {Region} from '../geography/regions/Region';
import {Set} from '../../sets/extensional/Set';

export interface Occurrence extends Model
{
	count: Range;
	geo: Set<Region>;
	time: Range;
}
