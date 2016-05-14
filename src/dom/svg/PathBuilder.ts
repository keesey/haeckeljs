import '../../Builder';
import '../../geometry/points/Point';
import '../../geometry/points/create';
import '../../numeric/precisionEqual';

export default class PathBuilder implements Builder<string>
{
	public close: boolean = true;
	private points: Point[] = [];
	public add(builder: PathBuilder): PathBuilder;
	public add(point: Point): PathBuilder;
	public add(x: number, y: number): PathBuilder;
	public add(a: PathBuilder | Point | number, y?: number): PathBuilder
	{
		if (typeof a === 'number')
		{
			this.points.push(pt.create(<number> a, y));
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
		const result: string[] = [lastCommand + last.x + ' ' + last.y];
		for (let i = 1; i < n; ++i)
		{
			const point = this.points[i];
			if (precisionEqual(last.x, point.x))
			{
				if (!precisionEqual(last.y, point.y))
				{
					if (lastCommand === 'V' && beforeLast && beforeLast.y >= Math.min(last.y, point.y) && beforeLast.y <= Math.max(last.y, point.y))
					{
						result.pop();
					}
					result.push((lastCommand = 'V') + point.y);
				}
			}
			else if (precisionEqual(last.y, point.y))
			{
				if (lastCommand === 'H' && beforeLast && beforeLast.x >= Math.min(last.x, point.x) && beforeLast.x <= Math.max(last.x, point.x))
				{
					result.pop();
				}
				result.push((lastCommand = 'H') + point.x);
			}
			else
			{
				result.push((lastCommand = 'L') + point.x + ' ' + point.y);
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
