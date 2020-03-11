import fetch from 'cross-fetch'
import { request, receive } from './ActionCommon';
import {
    INVENTORY_INVALIDATE,
    INVENTORY_FETCH,
    INVENTORY_RECEIVE,
    INVENTORY_TOGGLE_WEAPON,
    INVENTORY_TOGGLE_ARMOR
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

export function toggleWeapon(weaponId) {
    return {
        type: INVENTORY_TOGGLE_WEAPON,
        payload: {
            id: weaponId
        }
    }
}

export function toggleArmor(armorId) {
    return {
        type: INVENTORY_TOGGLE_ARMOR,
        payload: {
            id: armorId
        }
    }
}