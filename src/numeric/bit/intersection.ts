import './Set';
import './createFromBits';

export default function intersection(a: Set, b: Set): Set
{
	return createFromBits(a.bits & b.bits);
}
