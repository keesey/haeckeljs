import './Set';
import './list';

export default function write(set: Set): number | number[]
{
	if (set === null || set === undefined)
	{
		return undefined;
	}
	const result = list(set.bits);
	return result.length === 1 ? result[0] : result;
}
