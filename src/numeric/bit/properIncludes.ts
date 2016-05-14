import './Set';

export default function properIncludes(superset: Set, subset: Set): boolean
{
	return superset.bits !== subset.bits && (superset.bits & subset.bits) === subset.bits;
}
