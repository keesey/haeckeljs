import './Set';

export default function domain<T>(hash: string): Set<T>
{
	return Object.freeze({
		empty: false,
		hash: hash,
		hashMap: <{ [hash: string]: T; }> Object.freeze({}), // Technically invalid.
		size: Infinity,
	});
}
