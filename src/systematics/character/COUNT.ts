import {Character} from './Character';
import {NONNEGATIVES} from '../range/NONNEGATIVES.ts';
import {Range} from '../../numeric/ranges/Range';
import {create} from './ranges/create';

export const COUNT_CHARACTER = create(NONNEGATIVES, false, false);
