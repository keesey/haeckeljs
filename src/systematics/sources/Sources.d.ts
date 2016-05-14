import {Source} from './Source';
import {Nomenclature} from '../nomenclature/Nomenclature';

export interface Sources
{
	nomenclature: Nomenclature;
	sources: { [filename: string]: Source; };
}
