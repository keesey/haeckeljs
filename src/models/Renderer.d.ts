declare namespace haeckel
{
	export interface Renderer
	{
		render(parent: Builder<Element>, defsBuilder: () => Builder<Element>): Builder<Element>;
	}
}
