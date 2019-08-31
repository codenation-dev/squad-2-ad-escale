import * as types from './types';

/**
 * função que popula o state pets na store do redux,
 * recebe um payload que no caso vai ser o array de pets vindo de quem disparou a action
 */
export function fillPets(pets) {
  return {
    type: types.FILL_PETS,
    payload: pets,
  };
}

/**
 * função que popula o state pet selecionado na store do redux,
 * recebe um payload que no caso vai ser o objeto pet vindo de quem disparou a action
 */
export function fillPet(pet) {
  return {
    type: types.FILL_PET,
    payload: pet,
  };
}
