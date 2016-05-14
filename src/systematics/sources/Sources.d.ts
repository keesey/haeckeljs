import './Source';
import '../nomenclature/Nomenclature';

export interface Sources
{
	nomenclature: Nomenclature;
	sources: { [filename: string]: Source; };
}
