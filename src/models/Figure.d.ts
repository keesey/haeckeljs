/// <reference path='./RenderOptions.d.ts' />

declare namespace haeckel
{
	export interface Figure
	{
		assets?: {
			json?: string[];
			png?: string[];
			svg?: string[];
		};
		height: number;
		sources?: string[];
		width: number;
		render(options: RenderOptions): void;
	}
}
