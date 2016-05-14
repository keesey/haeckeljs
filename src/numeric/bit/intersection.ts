import {Set} from './Set';
import createFromBits from './createFromBits';

export default function(a: Set, b: Set): Set
{
	return createFromBits(a.bits & b.bits);
}
