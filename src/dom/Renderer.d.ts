import Builder from './Builder';

export interface Renderer
{
	render(parent: Builder, defs: () => Builder): Builder;
}
