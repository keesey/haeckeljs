import './RenderOptions';

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
