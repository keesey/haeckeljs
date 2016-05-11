import {precision} from './precision';

export function precisionEqual(a: number, b: number): boolean
{
	return Math.round(a * precision) / precision === Math.round(b * precision) / precision;
}
