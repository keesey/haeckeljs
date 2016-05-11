import {Entity} from '../core/Entity';
import {ExtSet} from '../extset/ExtSet';
import {Set} from '../core/Set';

export interface Taxic extends Set
{
	entities: ExtSet<Entity>;
	isUnit: boolean;
	units: ExtSet<Taxic>;
}
