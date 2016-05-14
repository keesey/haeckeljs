import './Set';

export default function includes(superset: Set, subset: Set): boolean
{
	return (superset.bits & subset.bits) === subset.bits;
}
