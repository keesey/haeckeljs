import './BoundingClientRectElement';
import '../../geometry/rectangles/create';

export default function rectangle(element: BoundingClientRectElement): Rectangle
{
	const rect = element.getBoundingClientRect();
	return create(rect.x, rect.y, rect.width, rect.height);
}
