import {Range} from './Range';

export const RANGE_INF: Range = Object.freeze({
	empty: false,
	hash: '[-Infinity…Infinity]',
	max: Infinity,
	mean: 0,
	min: -Infinity,
	size: Infinity,
});
