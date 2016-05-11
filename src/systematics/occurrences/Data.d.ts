import {Data as GeographyData} from '../geography/Data';
import {Data as RangeData} from '../../numeric/ranges/Data';

export interface Data
{
	count?: RangeData;
	geo?: GeographyData;
	time?: RangeData;
}
