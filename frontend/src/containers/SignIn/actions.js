import * as types from './types';

export function handleChangeUsername(name) {
  return {
    type: types.CHANGE_USERNAME,
    payload: name,
  };
}

export function handleChangePassword(pass) {
  return {
    type: types.CHANGE_PASSWORD,
    payload: pass,
  };
}

export function handleGetToken(token) {
  console.log(token);
  return {
    type: types.GET_TOKEN,
    payload: token,
  };
}
