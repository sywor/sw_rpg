import { fetch, invalidate } from './ReducerCommon'
import {
    FETCH,
    RECEIVE,
    INVALIDATE,
    WEAPONS,
    TOGGLE
} from '../Constants';

function inventory(state = {}, path, payload) {
    switch (path.shift()) {
        case FETCH:
            return fetch(state);
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                weapons: payload.json.weapons,
                armor: payload.json.armor
            });
        case INVALIDATE:
            return invalidate(state);
        case WEAPONS:
            return Object.assign({}, state, {
                weapons: inventoryWeapons(state.weapons, path, payload)
            })
        default:
            return state
    }
}

function inventoryWeapons(state = [], path, payload) {
    switch (path.shift()) {
        case TOGGLE:
            return state.map(weapon => {
                let newValue = !weapon.equiped;
                if (weapon.id === payload.weaponId) {
                    return Object.assign({}, weapon, {
                        equiped: newValue
                    });
                }

                return weapon;
            })
        default:
            return state;
    }
}

export default inventory;