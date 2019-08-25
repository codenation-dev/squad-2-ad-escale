import * as types from './types';

export function handleUsername(username) {
  return {
    type: types.CHANGE_USERNAME,
    payload: username,
  };
}

export function handlePassword(password) {
  return {
    type: types.CHANGE_PASSWORD,
    payload: password,
  };
}

export function handleToken(token) {
  return {
    type: types.FILL_TOKEN,
    payload: token,
  };
}

export function handleError(error) {
  return {
    type: types.FILL_ERROR,
    payload: error,
  };
}
