import {EMPTY_SET} from '../core/EMPTY_SET';
import {Builder} from './Builder';
import {ExtSet} from './ExtSet';
import {equal} from '../core/equal';

module Haeckel.ext
{
	export function setDiff<T>(minuend: ExtSet<T>, subtrahend: ExtSet<T>): ExtSet<T>
	{
		if (minuend.empty || subtrahend.size === Infinity)
		{
			return EMPTY_SET;
		}
		if (subtrahend.empty)
		{
			return minuend;
		}
		if (equal(minuend, subtrahend))
		{
			return EMPTY_SET;
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
