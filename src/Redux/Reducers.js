import { combineReducers } from 'redux'
import {
} from './Actions'

const INVENTORY = "INVENTORY";
const SKILLS = "SKILLS";
const COMBAT = "COMBAT";
const CHARACTER = "CHARACTER";

const FETCH = "FETCH";
const RECEIVE = "RECEIVE";
const INVALIDATE = "INVALIDATE";

const DESCRIPTION = "DESCRIPTION";
const NAME = "NAME";

function inventory(state = {}, path, payload) {
    switch (path.shift()) {
        case FETCH:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                weapons: payload.json.weapons,
                armor: payload.json.armor
            });
        case INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        default:
            return state
    }
}

function skills(state = {}, path, payload) {
    switch (path.shift()) {
        case FETCH:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                characteristics: payload.json.characteristics,
                values: payload.json.values
            });
        case INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        default:
            return state
    }
}

function combat(state = {}, path, payload) {
    switch (path.shift()) {
        case INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
        case RECEIVE:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                lastUpdated: payload.receivedAt,
                combat_stats: payload.json.combat_stats,
                critical_injuries: payload.json.critical_injuries
            });
        case FETCH:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        default:
            return state
    }
}

function character(state = {}, path, payload) {
    switch (path.shift()) {
        case INVALIDATE:
            return Object.assign({}, state, {
                didInvalidate: true
            });
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
        case FETCH:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            });
        case DESCRIPTION:
            return Object.assign({}, state, characterDescription(state.description, path, payload));
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

function rootReducer(state = {}, action) {
    const path = action.type.split(".");

    switch (path.shift()) {
        case INVENTORY:
            return Object.assign({}, state, {
                inventory: inventory(state.inventory, path, action.payload)
            });
        case SKILLS:
            return Object.assign({}, state, {
                skills: skills(state.skills, path, action.payload)
            });
        case COMBAT:
            return Object.assign({}, state, {
                combat: combat(state.combat, path, action.payload)
            });
        case CHARACTER:
            return Object.assign({}, state, {
                character: character(state.character, path, action.payload)
            });
        default:
            return state;
    }
}

export default rootReducer