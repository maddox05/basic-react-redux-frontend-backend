import { FLASH_HIDE, FLASH_SHOW } from 'src/app/store/actionTypes';

const DEFAULT_STATE = {
  show: false,
  msg: null,
  error: null,
};

export default function FlashReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case FLASH_SHOW:
      return { ...state, show: true, msg: action.payload.msg, error: action.payload.error };
    case FLASH_HIDE:
      return { ...state, DEFAULT_STATE, show: false };
    default:
      return state;
  }
}
