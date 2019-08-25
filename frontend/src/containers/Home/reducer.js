import * as types from './types';

/**
 * definicão de um estado inicial para a store, com um state pets do tipo array vazio
 */
const INITIAL_STATE = {
  pets: [],
};

/**
 *
 * @param {estado inicial que vai ser colocado na store} state
 * @param {recebe a lista de actions e define de fato o que a ação da action} action
 */
export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FILL_PETS: {
      /**
       *  caso a opção seja fill_pets copia todo o estado e subistitui o state pets pelo payload que veio da action
       */
      return {
        ...state,
        pets: action.payload,
      };
    }
    default:
      return state;
  }
}
