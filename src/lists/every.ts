export function every<T>(list: T[], condition: (element: T) => boolean): boolean
{
	const n = list.length;
	for (let i = 0; i < n; ++i)
	{
		if (!condition(list[i]))
		{
			return false;
		}
	}
	return true;
}
