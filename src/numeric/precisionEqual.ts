import PRECISION from './PRECISION';

export default function(a: number, b: number): boolean
{
	return Math.round(a * PRECISION) / PRECISION === Math.round(b * PRECISION) / PRECISION;
}
