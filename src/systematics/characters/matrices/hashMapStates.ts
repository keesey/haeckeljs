import {Character} from '../Character';
import {Taxic} from '../../taxic/Taxic';
import {Set} from '../../../sets/Set';
import forEach from '../../../sets/extensional/forEach';

export default function hashMapStates<S extends Set>(map: { [hash: string]: S; }, taxon: Taxic, character: Character<S>): S
{
    if (!taxon || taxon.empty)
    {
        return null;
    }
    var states: S = null;
    if (taxon.isUnit)
    {
        states = map[taxon.hash + '@' + character.hash];
        if (states === undefined)
        {
            return null;
        }
        return states;
    }
    var statesList: S[] = [];
    forEach(taxon.units, (unit: Taxic) =>
    {
        statesList.push(hashMapStates(map, unit, character));
    });
    return character.combine(statesList);
}
