import '../numeric/ranges/Range';
import '../sets/extensional/ExtensionalSet';

export interface Matrix<T>
{
	hashMap:
	{
		[hash: string]:
		{
			[hash: string]: Range;
		};
	};
	members: ExtensionalSet<T>;
}
