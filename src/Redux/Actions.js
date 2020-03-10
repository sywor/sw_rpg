import fetch from 'cross-fetch'

//COMMON 

function request(request_type) {
  return {
    type: request_type
  }
}

function receive(recived_type, json) {
  return {
    type: recived_type,
    payload: {
      json,
      receivedAt: Date.now()
    }
  }
}

//INVENTORY

export const INVENTORY_FETCH = 'INVENTORY.FETCH'
export const INVENTORY_RECEIVE = 'INVENTORY.RECEIVE'
export const INVENTORY_INVALIDATE = 'INVENTORY.INVALIDATE'

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

//SKILLS

export const SKILLS_FETCH = 'SKILLS.FETCH'
export const SKILLS_RECEIVE = 'SKILLS.RECEIVE'
export const SKILLS_INVALIDATE = 'SKILLS.INVALIDATE'

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

//COMBAT

export const COMBAT_FETCH = 'COMBAT.FETCH'
export const COMBAT_RECEIVE = 'COMBAT.RECEIVE'
export const COMBAT_INVALIDATE = 'COMBAT.INVALIDATE'

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

//CHARACTER

export const CHARACTER_FETCH = 'CHARACTER.FETCH';
export const CHARACTER_RECEIVE = 'CHARACTER.RECEIVE';
export const CHARACTER_INVALIDATE = 'CHARACTER.INVALIDATE';
export const CHARACTER_DESCRIPTION_NAME = 'CHARACTER.DESCRIPTION.NAME';

export function invalidateEntireCharacter() {
  return {
    type: CHARACTER_INVALIDATE
  }
}

export function SetCharacterName(new_name) {
  return {
    type: CHARACTER_DESCRIPTION_NAME,
    payload: {
      name: new_name
    }
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