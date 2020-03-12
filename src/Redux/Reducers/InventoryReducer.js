import {
    WEAPONS,
    ARMOR,
    TOGGLE
} from '../Constants';

function inventory(state = {}, path, payload) {
    switch (path.shift()) {
        case WEAPONS:
            return Object.assign({}, state, {
                weapons: toggleEquip(state.weapons, path, payload)
            })
        case ARMOR:
            return Object.assign({}, state, {
                armor: toggleEquip(state.armor, path, payload)
            })
        default:
            return state
    }
}

function toggleEquip(state = [], path, payload) {
    switch (path.shift()) {
        case TOGGLE:
            return state.map(item => {
                let newValue = !item.equiped;
                if (item.id === payload.id) {
                    return Object.assign({}, item, {
                        equiped: newValue
                    });
                }

                return item;
            })
        default:
            return state;
    }
}

export default inventory;