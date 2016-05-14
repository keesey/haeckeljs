import {Entity} from '../../entities/Entity';
import {Set} from '../../sets/Set';
import {Set as ExtensionalSet} from '../../sets/extensional/Set';

export interface Taxic extends Set
{
	entities: ExtensionalSet<Entity>;
	isUnit: boolean;
	units: ExtensionalSet<Taxic>;
}
