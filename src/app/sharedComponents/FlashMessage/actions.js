import { FLASH_HIDE, FLASH_SHOW } from 'src/app/store/actionTypes';

export function showFlashMessage(msg, error) {
  return {
    type: FLASH_SHOW,
    payload: {
      msg,
      error,
    },
  };
}

export function hideFlashMessage() {
  return { type: FLASH_HIDE };
}
