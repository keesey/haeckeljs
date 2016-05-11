import {Set} from './Set';

export function contains(s: Set, n: number): boolean
{
	return (s.bits & (1 << n)) !== 0;
}