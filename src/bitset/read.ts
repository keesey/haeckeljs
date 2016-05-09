import {BIT_MEMBER_MAX} from './BIT_MEMBER_MAX';
import {BitSet} from './BitSet';
import {create} from './create';
import {list} from './list';

export function read(data: number): BitSet;
export function read(data: number[]): BitSet;
export function read(data: number | number[]): BitSet
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
	if (!isNaN(n) && n >= 0 && n <= BIT_MEMBER_MAX)
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
