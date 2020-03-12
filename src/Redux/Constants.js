
export const INVENTORY = "INVENTORY";
export const SKILLS = "SKILLS";
export const COMBAT = "COMBAT";
export const CHARACTER = "CHARACTER";

export const FETCH = "FETCH";
export const RECEIVE = "RECEIVE";
export const INVALIDATE = "INVALIDATE";

export const DESCRIPTION = "DESCRIPTION";
export const NAME = "NAME";
export const WEAPONS = "WEAPONS";
export const ARMOR = "ARMOR";
export const TOGGLE = "TOGGLE";

export const INVENTORY_TOGGLE_WEAPON = [INVENTORY, WEAPONS, TOGGLE].join(".");
export const INVENTORY_TOGGLE_ARMOR = [INVENTORY, ARMOR, TOGGLE].join(".");

export const CHARACTER_FETCH = [CHARACTER, FETCH].join(".");
export const CHARACTER_RECEIVE = [CHARACTER, RECEIVE].join(".");