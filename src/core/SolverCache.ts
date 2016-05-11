import {hash} from './hash';

export class SolverCache
{
	private _results: { [key: string]: any; } = {};
	get<T>(key: string): T
	{
		return <T> this._results[key];
	}
	static getKey(functionName: String, args: any[]): string
	{
		const n = args.length;
		const hashes: string[] = new Array(n);
		for (let i = 0; i < n; ++i)
		{
			hashes[i] = hash(args[i]);
		}
		return functionName + '(' + hashes.join(',') + ')';
	}
	set<T>(key: string, value: T): T
	{
		return this._results[key] = value;
	}
}
