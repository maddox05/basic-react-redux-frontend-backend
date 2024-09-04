import { HIDE_FLASH, SHOW_FLASH } from 'src/app/store/actionTypes';

export function showFlashMessage(msg, error) {
  return {
    type: SHOW_FLASH,
    payload: {
      msg,
      error,
    },
  };
}

export function hideFlashMessage() {
  return { type: HIDE_FLASH };
}
