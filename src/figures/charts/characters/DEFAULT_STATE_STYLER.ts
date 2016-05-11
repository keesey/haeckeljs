import {BLACK} from '../../colors/BLACK';
import {StateStyler} from './StateStyler';
import {Style} from '../../../dom/Style';
import {createRGB} from '../../colors/createRGB';

export const DEFAULT_STATE_STYLER: StateStyler = (state: number, totalStates: number) =>
{
	let color = BLACK;
	if (state > 0 && totalStates > 0)
	{
		totalStates = Math.max(state + 1, totalStates);
		const value = 0xE0 * state / (totalStates - 1);
		color = createRGB(value, value, value);
	}
	return {
		fill: '#' + color.toString(0x10),
		'fill-opacity': 1,
		stroke: '#' + BLACK.toString(0x10),
		'stroke-opacity' : 1,
		'stroke-width': '1px',
	};
};
