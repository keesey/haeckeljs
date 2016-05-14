import '../../taxic/Taxic';
import '../../../../Model';
import '../../../../numeric/ranges/Range';
import '../../../../sets/extensional/Set';

export interface Divergence extends Model
{
	taxa: Set<Taxic>;
	time: Range;
}
