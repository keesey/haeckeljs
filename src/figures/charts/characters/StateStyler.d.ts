import {Style} from '../../../dom/Style';

export interface StateStyler
{
	(state: number, totalStates: number): Style;
}
