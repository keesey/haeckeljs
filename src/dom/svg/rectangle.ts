import {BBoxElement} from './BBoxElement';
import {create} from '../geometry/rectangles/create';

export function rectangle(element: BBoxElement): Rectangle
{
	const rect = element.getBBox();
	return create(rect.x, rect.y, rect.width, rect.height);
}
