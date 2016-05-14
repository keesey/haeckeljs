import {Set} from './Set';
import intersection from './intersection';
import size from './size';
import ONE from '../ranges/ONE';
import {Range} from '../ranges/Range';
import ZERO from '../ranges/ZERO';
import ZERO_TO_ONE from '../ranges/ZERO_TO_ONE';
import EMPTY from '../../sets/EMPTY';

export default function(a: Set, b: Set): Range
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
