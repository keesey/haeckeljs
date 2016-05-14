import '../numeric/ranges/Range';
import '../sets/extensional/Set';

export interface Matrix<T>
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
