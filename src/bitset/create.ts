import {BIT_MEMBER_MAX} from './BIT_MEMBER_MAX';
import {BitSet} from './BitSet';
import {createFromBits} from './createFromBits';

export function create(members: number[]): BitSet
{
	let bits = 0;
	for (let i = 0, n = members.length; i < n; ++i)
	{
		const member = members[i];
		if (!isFinite(member) || member < 0 || member > BIT_MEMBER_MAX)
		{
			throw new Error('Invalid member for bit set: ' + member + '.');
		}
		bits |= (1 << (member | 0));
	}
	return createFromBits(bits);
}
