import {Data as RegionData} from './region/Data';

export interface Data
{
	[regionName: string]: RegionData;
}
