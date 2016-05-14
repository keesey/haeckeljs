import {Builder} from '../../Builder';
import {Point} from '../../geometry/points/Point';
import create from '../../geometry/points/create';
import precisionEqual from '../../numeric/precisionEqual';

export default class PathBuilder implements Builder<string>
{
	public close = true;
	private points: Point[] = [];
	public add(builder: PathBuilder): PathBuilder;
	public add(point: Point): PathBuilder;
	public add(x: number, y: number): PathBuilder;
	public add(a: PathBuilder | Point | number, y?: number): PathBuilder
	{
		if (typeof a === 'number')
		{
			this.points.push(create(<number> a, y));
		}
		else if (a instanceof PathBuilder)
		{
			this.points = this.points.concat((<PathBuilder> a).points);
		}
		else
		{
			this.points.push(<Point> a);
		}
		return this;
	}
	public build(): string
	{
		const n = this.points.length;
		if (n === 0)
		{
			return 'M0,0Z';
		}
		let beforeLast: Point;
		let last = this.points[0];
		let lastCommand = 'M';
		const result: string[] = [lastCommand + last.join(' ')];
		for (let i = 1; i < n; ++i)
		{
			const point = this.points[i];
			if (precisionEqual(last[0], point[0]))
			{
				if (!precisionEqual(last[1], point[1]))
				{
					if (lastCommand === 'V' && beforeLast && beforeLast[1] >= Math.min(last[1], point[1]) && beforeLast[1] <= Math.max(last[1], point[1]))
					{
						result.pop();
					}
					result.push((lastCommand = 'V') + point[1]);
				}
			}
			else if (precisionEqual(last[1], point[1]))
			{
				if (lastCommand === 'H' && beforeLast && beforeLast[0] >= Math.min(last[0], point[0]) && beforeLast[0] <= Math.max(last[0], point[0]))
				{
					result.pop();
				}
				result.push((lastCommand = 'H') + point[0]);
			}
			else
			{
				result.push((lastCommand = 'L') + point.join(' '));
			}
			beforeLast = last;
			last = point;
		}
		if (this.close)
		{
			result.push('Z');
		}
		return result.join('');
	}
	public empty()
	{
		return this.points.length === 0;
	}
	public reset()
	{
		this.points = [];
		return this;
	}
	public reverse()
	{
		this.points.reverse();
		return this;
	}
}
