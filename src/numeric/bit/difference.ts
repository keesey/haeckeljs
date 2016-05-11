import {Set} from './Set';
import {createFromBits} from './createFromBits';

export function setDiff(minuend: Set, subtrahend: Set): Set
{
	return createFromBits((minuend.bits ^ subtrahend.bits) & minuend.bits);
}
