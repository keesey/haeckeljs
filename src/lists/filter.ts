export function filter<T>(list: T[], condition: (element: T) => boolean): T[]
{
	const result: T[] = [];
	const n = list.length;
	for (let i = 0; i < n; ++i)
	{
		const item = list[i];
		if (condition(item))
		{
			result.push(item);
		}
	}
	return result;
}
