import fetch from 'cross-fetch'
import { request, receive } from './ActionCommon';
import {
    COMBAT_INVALIDATE,
    COMBAT_FETCH,
    COMBAT_RECEIVE
} from '../Constants';

export function invalidateAllCombat() {
    return {
        type: COMBAT_INVALIDATE
    }
}

export function fetchAllCombat() {
    return function (dispatch) {
        dispatch(request(COMBAT_FETCH));

        return fetch("/models/combat_model.json")
            .then(response => response.json())
            .then(json => dispatch(receive(COMBAT_RECEIVE, json)));
    }
}