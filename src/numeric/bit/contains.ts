import {Set} from './Set';

export default function(s: Set, n: number): boolean
{
	return (s.bits & (1 << n)) !== 0;
}
