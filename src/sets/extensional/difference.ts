import Builder from './Builder';
import {Set} from './Set';
import EMPTY from '../EMPTY';
import equal from '../../equal';

export default function<T>(minuend: Set<T>, subtrahend: Set<T>): Set<T>
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
