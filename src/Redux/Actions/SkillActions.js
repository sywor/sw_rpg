import fetch from 'cross-fetch'
import { request, receive } from './ActionCommon';
import {
    SKILLS_INVALIDATE,
    SKILLS_FETCH,
    SKILLS_RECEIVE
} from '../Constants';

export function invalidateAllSkills() {
    return {
        type: SKILLS_INVALIDATE
    }
}

export function fetchAllSkills() {
    return function (dispatch) {
        dispatch(request(SKILLS_FETCH));

        return fetch("/models/skill_model.json")
            .then(response => response.json())
            .then(json => dispatch(receive(SKILLS_RECEIVE, json)));
    }
}