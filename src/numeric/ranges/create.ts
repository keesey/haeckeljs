import NONNEGATIVES from './NONNEGATIVES';
import NONPOSITIVES from './NONPOSITIVES';
import ONE from './ONE';
import REALS from './REALS';
import {Range} from './Range';
import ZERO from './ZERO';
import ZERO_TO_ONE from './ZERO_TO_ONE';
import PRECISION from '../PRECISION';
import EMPTY from '../../sets/EMPTY';

export default function(min: number, max: number = NaN): Range
{
	if (isNaN(min))
	{
		return EMPTY;
	}
	min = Math.round(min * PRECISION) / PRECISION;
	if (max === Infinity)
	{
		if (min === 0)
		{
			return NONNEGATIVES;
		}
		if (min === -Infinity)
		{
			return REALS;
		}
	}
	else if (min === -Infinity && max === 0)
	{
		return NONPOSITIVES;
	}
	if (isNaN(max))
	{
		max = min;
	}
	else
	{
		max = Math.round(max * PRECISION) / PRECISION;
	}
	if (!(min <= max))
	{
		throw new Error(min + ' is not less than or equal to ' + max + '.');
	}
	if (min === 0)
	{
		if (max === 1)
		{
			return ZERO_TO_ONE;
		}
		if (max === 0)
		{
			return ZERO;
		}
	}
	else if (min === 1 && max === 1)
	{
		return ONE;
	}
	return Object.freeze<Range>({
		empty: false,
		hash: '[' + min + '…' + max + ']',
		max: max,
		mean: (max + min) / 2,
		min: min,
		size: max - min,
	});
}
