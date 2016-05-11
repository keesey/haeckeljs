import {BitSet as Set} from './BitSet';
import {EMPTY} from '../EMPTY';
import {ONE} from '../../numeric/ranges/ONE';
import {ZERO} from '../../numeric/ranges/ZERO';
import {ZERO_TO_ONE} from '../../numeric/ranges/ZERO_TO_ONE';
import {Range} from '../../numeric/ranges/Range';
import {intersection} from './intersection';
import {size} from './size';

export function distance(a: Set, b: Set): Range
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
