import '../geography/regions/Region';
import '../../Model';
import '../../numeric/ranges/Range';
import '../../sets/extensional/Set';

export interface Occurrence extends Model
{
	count: Range;
	geo: Set<Region>;
	time: Range;
}
