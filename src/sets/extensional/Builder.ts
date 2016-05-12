import {Builder as IBuilder} from '.././../Builder';
import {EMPTY} from '../EMPTY';
import {Set} from './Set';
import {hash} from '../../hash';

export class Builder<T> implements IBuilder<Set<T>>
{
	private hashMap: { [hash: string]: T; } = {};
	public add(...elements: T[])
	{
		return this.addList(elements);
	}
	public addList(elements: T[])
	{
		for (let i = 0, n = elements.length; i < n; ++i)
		{
			const element = elements[i];
			if (element === null || element === undefined)
			{
				throw new Error('Null or undefined element.');
			}
			this.hashMap[hash(element)] = element;
		}
		return this;
	}
	public addSet(elements: Set<T>)
	{
		/* tslint:disable:forin */
		for (let h in elements.hashMap)
		/* tslint:enable:forin */
		{
			this.hashMap[h] = elements.hashMap[h];
		}
		return this;
	}
	public build(): Set<T>
	{
		const s: Set<T> = {
			empty: false,
			hash: '',
			hashMap: {},
			size: NaN,
		};
		const hashes: string[] = [];
		/* tslint:disable:forin */
		for (let h in this.hashMap)
		/* tslint:enable:forin */
		{
			s.hashMap[h] = this.hashMap[h];
			hashes.push(h);
		}
		const n = hashes.length;
		if (n === 0)
		{
			return EMPTY;
		}
		Object.freeze(s.hashMap);
		s.hash = '{' + hashes.sort().join(',') + '}';
		s.size = n;
		return Object.freeze(s);
	}
	public contains(element: T): boolean
	{
		return this.hashMap[hash(element)] !== undefined;
	}
	public remove(...elements: T[])
	{
		return this.removeList(elements);
	}
	public removeList(elements: T[])
	{
		for (let i = 0, n = elements.length; i < n; ++i)
		{
			delete this.hashMap[hash(elements[i])];
		}
		return this;
	}
	public removeSet(elements: Set<T>)
	{
		/* tslint:disable:forin */
		for (let h in elements.hashMap)
		/* tslint:enable:forin */
		{
			delete this.hashMap[h];
		}
		return this;
	}
	public reset()
	{
		this.hashMap = {};
		return this;
	}
}
