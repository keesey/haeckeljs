import {ExtSet} from '../extset/ExtSet';
import {Range} from '../range/Range';

export interface DistanceMatrix<T>
{
	hashMap:
	{
		[hash: string]:
		{
			[hash: string]: Range;
		};
	};
	members: ExtSet<T>;
}
