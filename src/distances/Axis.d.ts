import {ExtSet} from '../extset/ExtSet';
import {Range} from '../range/Range';

export interface Axis
{
	distance: Range;
	endpoints: ExtSet<number>;
}
