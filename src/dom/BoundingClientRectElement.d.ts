export interface BoundingClientRectElement extends Element
{
	getBoundingClientRect(): {
		bottom: number;
		left: number;
		height: number;
		right: number;
		top: number;
		width: number;
		x: number;
		y: number;
	};
}
