import '../Builder';
import '../systematics/sources/Sources';

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
	sources?: Sources;
}
