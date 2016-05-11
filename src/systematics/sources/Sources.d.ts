import {Nomenclature} from '../nomenclature/Nomenclature';
import {Source} from './Source';

export interface Sources
{
	nomenclature: Nomenclature;
	sources: { [filename: string]: Source; };
}
