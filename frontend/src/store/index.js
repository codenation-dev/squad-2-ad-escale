import { createStore, compose, combineReducers } from 'redux';

import home from '../containers/Home/reducer';
import signin from '../containers/SignIn/reducer';

const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const store = createStore(
  combineReducers({ home, signin }),
  compose(devToolsMiddleware),
);

export default store;
