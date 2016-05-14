import {Set} from './Set';

export default function(superset: Set, subset: Set): boolean
{
	return superset.bits !== subset.bits && (superset.bits & subset.bits) === subset.bits;
}
