import '../../sets/EMPTY';
import './Set';
import './list';

export default function createFromBits(bits: number): Set
{
	if (bits === 0)
	{
		return EMPTY;
	}
	return Object.freeze({
		bits: bits,
		empty: false,
		hash: '{' + list(bits).join(',') + '}',
	});
}
