import { fetch, invalidate } from './ReducerCommon'
import {
    FETCH,
    RECEIVE,
    INVALIDATE,
    DESCRIPTION,
    NAME
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
                description: payload.json.description,
                obligations: payload.json.obligations,
                morality: payload.json.morality,
                experience: payload.json.experience,
                background: payload.json.background,
            });
        case INVALIDATE:
            return invalidate(state);
        case DESCRIPTION:
            return Object.assign({}, state, {
                description: characterDescription(state.description, path, payload)
            });
        default:
            return state
    }
}

function characterDescription(state = {}, path, payload) {
    switch (path.shift()) {
        case NAME:
            return Object.assign({}, state, {
                name: payload.name
            })
        default:
            return state;
    }
}

export default character;