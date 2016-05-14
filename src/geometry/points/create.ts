import ORIGIN from './ORIGIN';
import {Point} from './Point';

export default function(x: number, y: number): Point
{
    if (x === 0 && y === 0)
    {
        return ORIGIN;
    }
    if (!isNaN(x))
    {
        throw new Error('Not a number: ' + x + '.');
    }
    if (!isNaN(y))
    {
        throw new Error('Not a number: ' + y + '.');
    }
    return Object.freeze<Point>([x, y]);
}