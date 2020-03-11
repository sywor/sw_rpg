import fetch from 'cross-fetch'
import { request, receive } from './ActionCommon';
import {
  CHARACTER_INVALIDATE,
  CHARACTER_FETCH,
  CHARACTER_RECEIVE,
} from '../Constants';

export function invalidateEntireCharacter() {
  return {
    type: CHARACTER_INVALIDATE
  }
}

export function fetchEntireCharacter() {
  return function (dispatch) {
    dispatch(request(CHARACTER_FETCH));

    return fetch("/models/character_model.json")
      .then(response => response.json())
      .then(json => dispatch(receive(CHARACTER_RECEIVE, json)));
  }
}