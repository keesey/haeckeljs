import {BBoxElement} from './BBoxElement';
import {Rectangle} from '../../geometry/rectangles/Rectangle';
import create from  '../../geometry/rectangles/create';

export default function(element: BBoxElement): Rectangle
{
	const rect = element.getBBox();
	return create(rect.x, rect.y, rect.width, rect.height);
}
