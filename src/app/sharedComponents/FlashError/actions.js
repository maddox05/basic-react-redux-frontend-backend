import { ERROR_SHOW, ERROR_HIDE } from '../../store/actionTypes.js';

export function showErrorMessage(error, errorMsg) {
  return {
    type: ERROR_SHOW,
    payload: {
      error,
      errorMsg,
    },
  };
}

export function hideFlashMessage() {
  return async function (dispatch) {
    dispatch({
      type: ERROR_HIDE,
    });
  };
}
