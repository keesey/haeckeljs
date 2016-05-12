export function map<X, Y>(list: X[], map: (element: X) => Y): Y[]
{
	const n = list.length;
	const result: Y[] = new Array(n);
	for (let i = 0; i < n; ++i)
	{
		result[i] = map(list[i]);
	}
	return result;
}
