import {Set as ExtensionalSet} from './extensional/Set';
import {Set as IntensionalSet} from './intensional/Set';
import {Set as TypeSet} from './type/Set';
import '../geometry/rays/Ray';
import '../geometry/rectangles/Rectangle';
import {Set as BitSet} from '../numeric/bit/Set';
import '../numeric/ranges/Range';
import '../systematics/taxic/Taxic';

export interface EmptySet extends ExtensionalSet<any>, BitSet, IntensionalSet<any>, Range, Ray, Rectangle, Taxic, TypeSet<any>
{
}
