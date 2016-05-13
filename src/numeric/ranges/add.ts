import {EMPTY} from '../sets/EMPTY';
import {Range} from './Range';
import {create} from './create';

export default function add(range: Range, value: number): Range
{
	if (isNaN(value))
	{
		throw new Error('Not a number: ' + value + '.');
	}
	if (value === 0)
	{
		return range;
	}
	if (range.empty)
	{
		return EMPTY;
	}
	return create(range.min + value, range.max + value);
}
