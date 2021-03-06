import hash from './hash';

export default function(a: any, b: any): boolean
{
	if (a === b)
	{
		return true;
	}
	if ((typeof a === 'number' && isNaN(a)) || (typeof b === 'number' && isNaN(b)) || typeof a === 'function' || typeof b === 'function')
	{
		return false;
	}
	return hash(a) === hash(b);
}
