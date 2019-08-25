import { createStore, compose, combineReducers } from 'redux';

/**
 * Import dos reducers, que são a os componentes que de fato manipularão o state no redux
 */
import home from '../containers/Home/reducer';
import signin from '../containers/SignIn/reducer';

/**
 * Objeto que permite utilizarmos a extensão "redux dev tools no browser"
 */
const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

/**
 * criação do objeto store que é unico por app, que vai armazenar e manipular os estados da aplicação
 * passagem de dois parâmetros para a store:
 * 1. os reducers combinados
 * 2. oobjejto que vai permitir a extensão "redux dev tools"
 */
const store = createStore(
  combineReducers({ home, signin }),
  compose(devToolsMiddleware),
);

export default store;
