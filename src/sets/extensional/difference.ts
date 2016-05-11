import {Builder} from './Builder';
import {EMPTY} from '../EMPTY';
import {Set} from './Set';
import {equal} from '../../equal';

module Haeckel.ext
{
	export function setDiff<T>(minuend: Set<T>, subtrahend: Set<T>): Set<T>
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
}
