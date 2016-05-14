import './Set';
import './intersection';
import '../EMPTY';
import '../../equal';
import '../../numeric/ranges/ONE';
import '../../numeric/ranges/Range';
import '../../numeric/ranges/ZERO';
import '../../numeric/ranges/ZERO_TO_ONE';

export default function distance<T>(a: Set<T>, b: Set<T>): Range
{
	if (a === null || b === null)
	{
		return EMPTY;
	}
	if (equal(a, b) || a.size === Infinity || b.size === Infinity)
	{
		return a.size === 1 ? ZERO : ZERO_TO_ONE;
	}
	return intersection(a, b).empty ? ONE : ZERO_TO_ONE;
}
