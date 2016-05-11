import {Range} from '../sets/ranges/Range';
import {ExtensionalSet as Set} from '../sets/extensional/ExtensionalSet';

export interface DistanceMatrix<T>
{
	hashMap:
	{
		[hash: string]:
		{
			[hash: string]: Range;
		};
	};
	members: Set<T>;
}
