
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
export const TOGGLE = "TOGGLE";

export const INVENTORY_INVALIDATE = [INVENTORY, INVALIDATE].join(".");
export const INVENTORY_FETCH = [INVENTORY, FETCH].join(".");
export const INVENTORY_RECEIVE = [INVENTORY, RECEIVE].join(".");
export const INVENTORY_TOGGLE_WEAPON = [INVENTORY, WEAPONS, TOGGLE].join(".");

export const SKILLS_INVALIDATE = [SKILLS, INVALIDATE].join(".");
export const SKILLS_FETCH = [SKILLS, FETCH].join(".");
export const SKILLS_RECEIVE = [SKILLS, RECEIVE].join(".");
export const COMBAT_INVALIDATE = [COMBAT, INVALIDATE].join(".");
export const COMBAT_FETCH = [COMBAT, FETCH].join(".");
export const COMBAT_RECEIVE = [COMBAT, RECEIVE].join(".");
export const CHARACTER_INVALIDATE = [CHARACTER, INVALIDATE].join(".");
export const CHARACTER_FETCH = [CHARACTER, FETCH].join(".");
export const CHARACTER_RECEIVE = [CHARACTER, RECEIVE].join(".");