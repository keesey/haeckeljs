import {Region} from '../geography/regions/Region';
import {Model} from '../../Model';
import {Range} from '../../numeric/ranges/Range';
import {Set} from '../../sets/extensional/Set';

export interface Occurrence extends Model
{
	count: Range;
	geo: Set<Region>;
	time: Range;
}
