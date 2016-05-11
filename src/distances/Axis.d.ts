import {Range} from '../sets/ranges/Range';
import {ExtensionalSet as Set} from '../sets/extensional/ExtensionalSet';

export interface Axis
{
	distance: Range;
	endpoints: Set<number>;
}
