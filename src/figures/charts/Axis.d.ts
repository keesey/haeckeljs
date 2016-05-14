import '../../numeric/ranges/Range';

export interface Axis
{
	labelFunction?: (value: number) => string;
	range: Range;
	step: number;
}
