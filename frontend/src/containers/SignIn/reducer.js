import * as types from './types';

const INITIAL_STATE = {
  username: '',
  password: '',
  loading: false,
  token: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case types.CHANGE_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case types.CHANGE_PASSWORD: {
      return {
        ...state,
        password: action.payload,
      };
    }
    case types.GET_TOKEN: {
      return {
        ...state,
        token: action.payload,
      };
    }

    default:
      return state;
  }
}
