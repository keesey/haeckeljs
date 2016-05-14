import MEMBER_MAX from './MEMBER_MAX';
import {Set} from './Set';
import create from './create';
import list from './list';

export default function(data: number | number[]): Set
{
	if (data === null || data === undefined)
	{
		return null;
	}
	if (Array.isArray(data))
	{
		return create(<number[]> data);
	}
	const n = Number(data);
	if (!isNaN(n) && n >= 0 && n <= MEMBER_MAX)
	{
		const bits = 1 << n;
		return Object.freeze({
			bits: bits,
			empty: false,
			hash: '{' + list(bits).join(',') + '}',
		});
	}
	return null;
}
