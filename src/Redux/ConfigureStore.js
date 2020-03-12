import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './RootReducer';
import Init from './Init';
import { fetchCharacterById } from './Actions/GlobalActions';

const loggerMiddleware = createLogger()

export default function configureStore() {

  const store = createStore(
    rootReducer,
    Init,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  )

  store.dispatch(fetchCharacterById());

  return store;
}