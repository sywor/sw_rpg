import inventory from './Reducers/InventoryReducer';
import skills from './Reducers/SkillsReducer';
import combat from './Reducers/CombatReducer';
import character from './Reducers/CharacterReducer';
import {
    INVENTORY,
    SKILLS,
    COMBAT,
    CHARACTER
} from './Constants';

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