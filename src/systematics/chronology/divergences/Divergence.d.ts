import {Set} from '../../../../sets/extensional/Set';
import {Model} from '../../../../Model';
import {Range} from '../../../../numeric/ranges/Range';
import {Taxic} from '../../taxic/Taxic';

export interface Divergence extends Model
{
	taxa: Set<Taxic>;
	time: Range;
}
