import {GUID4_RANDOM} from './GUID4_RANDOM';

export function guid4(): string
{
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c: string) =>
	{
		const r = GUID4_RANDOM() * 16 | 0;
		return ((c === 'x') ? r : (r & 0x3 | 0x8)).toString(16);
	});
}
