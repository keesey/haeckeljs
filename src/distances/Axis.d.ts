import '../numeric/ranges/Range';
import '../sets/extensional/ExtensionalSet';

export interface Axis
{
	distance: Range;
	endpoints: Set<number>;
}
