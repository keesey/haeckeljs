import './Set';
import './createFromBits';

export default function setDiff(minuend: Set, subtrahend: Set): Set
{
	return createFromBits((minuend.bits ^ subtrahend.bits) & minuend.bits);
}
