export default function forEach<T>(list: T[], f: (element: T) => any): void
{
	const n = list.length;
	for (let i = 0; i < n; ++i)
	{
		f(list[i]);
	}
}
