import * as types from './types';

export function handleGetPets(pets) {
  return {
    type: types.GET_PETS,
    payload: pets,
  };
}

export function handleGetFilteredPets(pets) {
  return {
    type: types.GET_FILTERED_PETS,
    payload: pets,
  };
}
