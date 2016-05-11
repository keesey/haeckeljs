import {Entity} from '../../entities/Entity';
import {Set as ExtensionalSet} from '../../sets/extensional/Set';
import {Set} from '../../sets/Set';

export interface Taxic extends Set
{
	entities: ExtensionalSet<Entity>;
	isUnit: boolean;
	units: ExtensionalSet<Taxic>;
}
