import {RANGE_0} from '../range/RANGE_0';
import {RANGE_0_TO_1} from '../range/RANGE_0_TO_1';
import {RANGE_1} from '../range/RANGE_1';
import {Range} from '../range/Range';
import {EMPTY_SET} from '../core/EMPTY_SET';
import {ExtSet} from './ExtSet';
import {intersect} from './intersect';
import {equal} from '../core/equal';

export function distance<T>(a: ExtSet<T>, b: ExtSet<T>): Range
{
	if (a === null || b === null)
	{
		return EMPTY_SET;
	}
	if (equal(a, b) || a.size === Infinity || b.size === Infinity)
	{
		return a.size === 1 ? RANGE_0 : RANGE_0_TO_1;
	}
	return intersect(a, b).empty ? RANGE_1 : RANGE_0_TO_1;
}
