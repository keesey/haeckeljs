import './Builder';
import './Set';
import '../EMPTY';
import '../../equal';

export default function difference<T>(minuend: Set<T>, subtrahend: Set<T>): Set<T>
{
	if (minuend.empty || subtrahend.size === Infinity)
	{
		return EMPTY;
	}
	if (subtrahend.empty)
	{
		return minuend;
	}
	if (equal(minuend, subtrahend))
	{
		return EMPTY;
	}
	if (minuend.size === Infinity)
	{
		throw new Error('Cannot traverse domain sets.');
	}
	return new Builder<T>()
		.addSet(minuend)
		.removeSet(subtrahend)
		.build();
}
