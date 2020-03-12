import inventory from './Reducers/InventoryReducer';
import character from './Reducers/CharacterReducer';
import {
    INVENTORY,
    CHARACTER
} from './Constants';

function rootReducer(state = {}, action) {
    const path = action.type.split(".");

    switch (path.shift()) {
        case INVENTORY:
            return Object.assign({}, state, {
                inventory: inventory(state.inventory, path, action.payload)
            });/*
        case SKILLS:
            return Object.assign({}, state, {
                skills: skills(state.skills, path, action.payload)
            });
        case COMBAT:
            return Object.assign({}, state, {
                combat: combat(state.combat, path, action.payload)
            });*/
        case CHARACTER:
            return Object.assign({}, state, character(state, path, action.payload))
        default:
            return state;
    }
}

export default rootReducer