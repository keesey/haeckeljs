import {PRECISION} from './PRECISION';

export function precisionEqual(a: number, b: number): boolean
{
	return Math.round(a * PRECISION) / PRECISION === Math.round(b * PRECISION) / PRECISION;
}
