import {Set} from './Set';
import createFromBits from './createFromBits';

export default function(minuend: Set, subtrahend: Set): Set
{
	return createFromBits((minuend.bits ^ subtrahend.bits) & minuend.bits);
}
