import {BoundingClientRectElement} from './BoundingClientRectElement';
import {Rectangle} from '../geometry/rectangles/Rectangle';
import create from '../geometry/rectangles/create';

export default function(element: BoundingClientRectElement): Rectangle
{
	const rect = element.getBoundingClientRect();
	return create(rect.x, rect.y, rect.width, rect.height);
}
