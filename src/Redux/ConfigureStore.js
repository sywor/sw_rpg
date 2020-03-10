import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers';

import Init from './Init';
import {
  fetchEntireInventory,
  fetchAllSkills,
  fetchAllCombat,
  fetchEntireCharacter
} from './Actions';

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