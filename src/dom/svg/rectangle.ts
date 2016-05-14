import './BBoxElement';
import '../../geometry/rectangles/create';

export default function rectangle(element: BBoxElement): Rectangle
{
	const rect = element.getBBox();
	return create(rect.x, rect.y, rect.width, rect.height);
}
