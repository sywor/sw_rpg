import { fetch } from './ReducerCommon'
import {
    FETCH,
    RECEIVE
} from '../Constants';

function character(state = {}, path, payload) {
    switch (path.shift()) {
        case FETCH:
            return fetch(state);
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                character: payload.json.character,
                skills: payload.json.skills,
                combat: payload.json.combat,
                inventory: payload.json.inventory,
            });

        default:
            return state
    }
}

export default character;