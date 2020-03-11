import { fetch, invalidate } from './ReducerCommon'
import {
    FETCH,
    RECEIVE,
    INVALIDATE
} from '../Constants';

function skills(state = {}, path, payload) {
    switch (path.shift()) {
        case FETCH:
            return fetch(state);
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                characteristics: payload.json.characteristics,
                values: payload.json.values
            });
        case INVALIDATE:
            return invalidate(state);
        default:
            return state
    }
}

export default skills;