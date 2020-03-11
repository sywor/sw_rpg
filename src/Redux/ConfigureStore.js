import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './RootReducer';
import Init from './Init';
import { fetchEntireInventory } from './Actions/InventoryActions';
import { fetchAllSkills } from './Actions/SkillActions';
import { fetchAllCombat } from './Actions/CombatActions';
import { fetchEntireCharacter } from './Actions/CharacterActions';

const loggerMiddleware = createLogger()

export default function configureStore() {

  const store = createStore(
    rootReducer,
    Init,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )

  store.dispatch(fetchEntireInventory());
  store.dispatch(fetchAllSkills());
  store.dispatch(fetchAllCombat());
  store.dispatch(fetchEntireCharacter());

  return store;
}