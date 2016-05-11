import {Model} from '../core/Model';
import {Range} from '../range/Range';

export interface Stratum extends Model
{
	type: string;
	name: string;
	start: Range;
	end: Range;
}
