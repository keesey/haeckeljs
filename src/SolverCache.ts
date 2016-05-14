import hash from './hash';

export default class SolverCache
{
	private results: { [key: string]: any; } = {};
	public static getKey(functionName: String, args: any[]): string
	{
		const n = args.length;
		const hashes: string[] = new Array(n);
		for (let i = 0; i < n; ++i)
		{
			hashes[i] = hash(args[i]);
		}
		return functionName + '(' + hashes.join(',') + ')';
	}
	public get<T>(key: string): T
	{
		return <T> this.results[key];
	}
	public set<T>(key: string, value: T): T
	{
		return this.results[key] = value;
	}
}
