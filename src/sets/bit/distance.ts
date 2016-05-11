import {BitSet} from './BitSet';
import {EMPTY_SET} from '../core/EMPTY_SET';
import {RANGE_0} from '../range/RANGE_0';
import {RANGE_0_TO_1} from '../range/RANGE_0_TO_1';
import {RANGE_1} from '../range/RANGE_1';
import {Range} from '../range/Range';
import {intersect} from './intersect';
import {size} from './size';

export function distance(a: BitSet, b: BitSet): Range
{
	if (a === null || b === null)
	{
		return EMPTY_SET;
	}
	if (a.bits === b.bits)
	{
		return size(a) === 1 ? RANGE_0 : RANGE_0_TO_1;
	}
	return intersect(a, b).empty ? RANGE_1 : RANGE_0_TO_1;
}
