import fetch from 'cross-fetch'
import { request, receive } from './ActionCommon';
import {
    INVENTORY_INVALIDATE,
    INVENTORY_FETCH,
    INVENTORY_RECEIVE,
    INVENTORY_TOGGLE_WEAPON
} from '../Constants';

export function invalidateEntireInventory() {
    return {
        type: INVENTORY_INVALIDATE
    }
}

export function fetchEntireInventory() {
    return function (dispatch) {
        dispatch(request(INVENTORY_FETCH));

        return fetch("/models/inventory_model.json")
            .then(response => response.json())
            .then(json => dispatch(receive(INVENTORY_RECEIVE, json)));
    }
}

export function toggleWeapon(weapon_id) {
    return {
        type: INVENTORY_TOGGLE_WEAPON,
        payload: {
            weaponId: weapon_id
        }
    }
}