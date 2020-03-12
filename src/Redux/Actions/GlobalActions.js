import fetch from 'cross-fetch'
import { request, receive } from './ActionCommon';
import {
    CHARACTER_FETCH,
    CHARACTER_RECEIVE,
} from '../Constants';

export function fetchCharacterById(userId = "ed791015-a31e-4ec9-b604-6a4f7a03dcf1") {
    return function (dispatch) {
        dispatch(request(CHARACTER_FETCH));

        return fetch("https://49f3atbvai.execute-api.eu-west-1.amazonaws.com/prod/user?userId=" + userId)
            .then(response => response.json())
            .then(json => dispatch(receive(CHARACTER_RECEIVE, json)));
    }
}