import { HIDE_FLASH, SHOW_FLASH } from 'src/app/store/actionTypes';

const DEFAULT_STATE = {
  show: false,
  msg: null,
  error: null,
};

export default function FlashReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SHOW_FLASH:
      return { ...state, show: true, msg: action.payload.msg, error: action.payload.error };
    case HIDE_FLASH:
      return { ...state, DEFAULT_STATE, show: false };
    default:
      return state;
  }
}
