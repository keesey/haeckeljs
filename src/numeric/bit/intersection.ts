import {Set} from './Set';
import {createFromBits} from './createFromBits';

export function intersection(a: Set, b: Set): Set
{
	return createFromBits(a.bits & b.bits);
}
