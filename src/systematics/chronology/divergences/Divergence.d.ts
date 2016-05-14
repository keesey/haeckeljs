import {Taxic} from '../../taxic/Taxic';
import {Model} from '../../../Model';
import {Range} from '../../../numeric/ranges/Range';
import {Set} from '../../../sets/extensional/Set';

export interface Divergence extends Model
{
	taxa: Set<Taxic>;
	time: Range;
}
