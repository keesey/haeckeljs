/// <reference path='./Builder.d.ts' />
/// <reference path='./DataSources.d.ts' />

declare namespace haeckel
{
	export interface RenderOptions
	{
		builder: Builder<Element>;
		defs: () => Builder<Element>;
		pngAssets: {
			image(builder: Builder<Element>, filename: string): Builder<Element>;
		};
		jsonAssets: {
			[filename: string]: Object | Array<any> | string | number | boolean;
		};
		sources?: DataSources;
	}
}
