import * as types from './types';

/**
 * função que popula o state pets na store do redux,
 * recebe um payload que no caso vai ser o objeto pets vindo de quem disparou a action
 */
export function fillPets(pets) {
  return {
    type: types.FILL_PETS,
    payload: pets,
  };
}
