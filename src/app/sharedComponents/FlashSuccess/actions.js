import { SUCCESS_SHOW, SUCCESS_HIDE } from 'src/app/store/actionTypes';

export function showSuccessMessage(msg) {
  return function (dispatch) {
    dispatch({ type: SUCCESS_SHOW, payload: msg });
  };
}

export function hideSuccessMessage() {
  return function (dispatch) {
    dispatch({ type: SUCCESS_HIDE });
  };
}
