import './MEMBER_MAX';
import './Set';
import './createFromBits';

export default function create(members: number[]): Set
{
	let bits = 0;
	for (let i = 0, n = members.length; i < n; ++i)
	{
		const member = members[i];
		if (!isFinite(member) || member < 0 || member > MEMBER_MAX)
		{
			throw new Error('Invalid member for bit set: ' + member + '.');
		}
		bits |= (1 << (member | 0));
	}
	return createFromBits(bits);
}
