import {Coords} from '../geo/Coords';
import {ExtSet} from '../extset/ExtSet';
import {Model} from '../core/Model';
import {Range} from '../range/Range';

export interface Occurrence extends Model
{
	count: Range;
	geo: ExtSet<Coords[]>;
	time: Range;
}
