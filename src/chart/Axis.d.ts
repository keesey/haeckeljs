import {Range} from '../range/Range';

export interface Axis
{
	labelFunction?: (value: number) => string;
	range: Range;
	step: number;
}
