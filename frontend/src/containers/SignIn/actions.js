import * as types from './types';

export function handlePassword(password) {
  return {
    type: types.FILL_PASSWORD,
    payload: password,
  };
}

export function handleToken(token) {
  return {
    type: types.FILL_TOKEN,
    payload: token,
  };
}

export function handleEmail(email) {
  return {
    type: types.FILL_EMAIL,
    payload: email,
  };
}

export function handleError(error) {
  return {
    type: types.FILL_ERROR,
    payload: error,
  };
}
