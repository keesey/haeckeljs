import {Data as RegionData} from './regions/Data';

export interface Data
{
	[regionName: string]: RegionData;
}
