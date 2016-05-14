import './Rectangle';
import './create';

export default function createFromCoordinates(x: number, y: number, x2: number, y2: number): Rectangle
{
	if (x <= x2)
	{
		if (y <= y2)
		{
			return create(x, y, x2 - x, y2 - y);
		}
		else
		{
			return create(x, y2, x2 - x, y - y2);
		}
	}
	else if (y <= y2)
	{
		return create(x2, y, x - x2, y2 - y);
	}
	return create(x2, y2, x - x2, y - y2);
}
