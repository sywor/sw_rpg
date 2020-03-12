import {
    INVENTORY_TOGGLE_WEAPON,
    INVENTORY_TOGGLE_ARMOR
} from '../Constants';

export function toggleWeapon(weaponId) {
    return {
        type: INVENTORY_TOGGLE_WEAPON,
        payload: {
            id: weaponId
        }
    }
}

export function toggleArmor(armorId) {
    return {
        type: INVENTORY_TOGGLE_ARMOR,
        payload: {
            id: armorId
        }
    }
}