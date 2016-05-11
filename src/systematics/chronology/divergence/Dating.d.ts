import {ExtSet} from '../extset/ExtSet';
import {Model} from '../core/Model';
import {Range} from '../range/Range';
import {Taxic} from '../taxonomy/Taxic';

export interface Dating extends Model
{
	taxa: ExtSet<Taxic>;
	time: Range;
}
