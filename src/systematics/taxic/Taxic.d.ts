import '../../entities/Entity';
import '../../sets/Set';
import {Set as ExtensionalSet} from '../../sets/extensional/Set';

export interface Taxic extends Set
{
	entities: ExtensionalSet<Entity>;
	isUnit: boolean;
	units: ExtensionalSet<Taxic>;
}
