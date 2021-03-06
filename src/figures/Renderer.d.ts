import {Builder} from '../Builder';

export interface Renderer
{
	render(parent: Builder<Element>, defsBuilder: () => Builder<Element>): Builder<Element>;
}
