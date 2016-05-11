import {Range} from './Range';

export const RANGE_POS_INF: Range = Object.freeze({
	empty: false,
	hash: '[0…Infinity]',
	max: Infinity,
	mean: Infinity,
	min: 0,
	size: Infinity,
});
