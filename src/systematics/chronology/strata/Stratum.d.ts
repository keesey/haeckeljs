import {Model} from '../../../Model';
import {Range} from '../../../numeric/ranges/Range';

export interface Stratum extends Model
{
	type: string;
	name: string;
	start: Range;
	end: Range;
}
