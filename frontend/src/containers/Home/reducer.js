import * as types from './types';

const INITIAL_STATE = {
  pets: [],
  filteredPets: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case types.GET_PETS: {
      return {
        ...state,
        pets: action.payload,
      };
    }
    case types.GET_FILTERED_PETS: {
      return {
        ...state,
        filteredPets: action.payload,
      };
    }
    default:
      return state;
  }
}
