import {Range} from './Range';

export default function(a: Range, b: Range): number
{
	if (a.empty)
	{
		return b.empty ? 0 : -1;
	}
	if (b.empty)
	{
		return 1;
	}
	return a.mean - b.mean;
}
