import {ZERO} from '../../numeric/ranges/ZERO';
import {ZERO_TO_ONE} from '../../numeric/ranges/ZERO_TO_ONE';
import {ONE} from '../../numeric/ranges/ONE';
import {Range} from '../../numeric/ranges/Range';
import {EMPTY} from '../EMPTY';
import {Set} from './Set';
import {equal} from '../../equal';
import {intersection} from './intersection';

export function distance<T>(a: Set<T>, b: Set<T>): Range
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
