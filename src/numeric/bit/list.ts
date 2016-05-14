import MEMBER_MAX from './MEMBER_MAX';
import {Set} from './Set';

export default function(s: number | Set): number[]
{
	const bits: number = typeof s === 'number' ? (<number> s) : (<Set> s).bits;
	const result: number[] = [];
	for (let i = 0, b = 1; i < MEMBER_MAX; ++i)
	{
		if ((bits & b) !== 0)
		{
			result.push(i);
		}
		b <<= 1;
	}
	return result;
}
