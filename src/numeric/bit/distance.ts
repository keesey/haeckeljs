import './Set';
import './intersection';
import './size';
import '../ranges/ONE';
import '../ranges/Range';
import '../ranges/ZERO';
import '../ranges/ZERO_TO_ONE';
import '../../sets/EMPTY';

export default function distance(a: Set, b: Set): Range
{
	if (a === null || b === null)
	{
		return EMPTY;
	}
	if (a.bits === b.bits)
	{
		return size(a) === 1 ? ZERO : ZERO_TO_ONE;
	}
	return intersection(a, b).empty ? ONE : ZERO_TO_ONE;
}
