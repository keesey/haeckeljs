import {BitSet} from '../bitset/BitSet';
import {ExtSet} from '../extset/ExtSet';
import {IntSet} from '../intset/IntSet';
import {Range} from '../range/Range';
import {Ray} from '../ray/Ray';
import {Rectangle} from '../rectangle/Rectangle';
import {Taxic} from '../taxonomy/Taxic';
import {TypeSet} from '../typeset/TypeSet';

declare namespace haeckel
{
	export interface EmptySet extends ExtSet<any>, BitSet, IntSet<any>, Range, Ray, Rectangle, Taxic, TypeSet<any>
	{
	}
}
