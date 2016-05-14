import './Set';
import './createFromBits';

export default function union(sets: Set[]): Set
{
	const n = sets.length;
	if (n === 0)
	{
		return null;
	}
	if (n === 1)
	{
		return sets[0];
	}
	let bits = 0;
	for (let i = 0; i < n; ++i)
	{
		bits |= sets[i].bits;
	}
	return createFromBits(bits);
}
