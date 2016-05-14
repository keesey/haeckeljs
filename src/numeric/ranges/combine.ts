import './Range';
import './create';

export default function combine(ranges: Range[]): Range
{
	const n = ranges.length;
	if (n === 1)
	{
		return ranges[0];
	}
	if (n === 0)
	{
		return null;
	}
	let min = NaN;
	let max = NaN;
	for (let i = 0; i < n; ++i)
	{
		const range = ranges[i];
		if (!range)
		{
			continue;
		}
		if (isNaN(min) || range.min < min)
		{
			min = range.min;
		}
		if (isNaN(max) || range.max > max)
		{
			max = range.max;
		}
	}
	if (isNaN(min))
	{
		return null;
	}
	return create(min, max);
}
