import {Data as GeoData} from '../geo/Data';
import {Data as RangeData} from '../range/Data';

export interface OccurrenceData
{
	count?: RangeData;
	geo?: GeoData;
	time?: RangeData;
}
