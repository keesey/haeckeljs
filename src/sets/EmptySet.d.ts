import {Set as ExtensionalSet} from './extensional/Set';
import {Set as IntensionalSet} from './intensional/Set';
import {Set as TypeSet} from './type/Set';
import {Ray} from '../geometry/rays/Ray';
import {Rectangle} from '../geometry/rectangles/Rectangle';
import {Set as BitSet} from '../numeric/bit/Set';
import {Range} from '../numeric/ranges/Range';
import {Taxic} from '../systematics/taxic/Taxic';

export interface EmptySet extends ExtensionalSet<any>, BitSet, IntensionalSet<any>, Range, Ray, Rectangle, Taxic, TypeSet<any>
{
}
