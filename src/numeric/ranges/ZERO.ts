import {Range} from './Range';

export const ZERO: Range = Object.freeze({
	empty: false,
	hash: '[0…0]',
	max: 0,
	mean: 0,
	min: 0,
	size: 0,
});
