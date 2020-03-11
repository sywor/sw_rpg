import { fetch, invalidate } from './ReducerCommon'
import {
    FETCH,
    RECEIVE,
    INVALIDATE
} from '../Constants';

function combat(state = {}, path, payload) {
    switch (path.shift()) {
        case FETCH:
            return fetch(state);
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                combat_stats: payload.json.combat_stats,
                critical_injuries: payload.json.critical_injuries
            });
        case INVALIDATE:
            return invalidate(state);
        default:
            return state
    }
}

export default combat;