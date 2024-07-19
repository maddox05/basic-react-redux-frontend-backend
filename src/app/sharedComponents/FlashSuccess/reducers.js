import { SUCCESS_HIDE, SUCCESS_SHOW } from '../../store/actionTypes.js';

const DEFAULT_STATE = {
  show: false,
  msg: '',
};

export default function FlashSuccessReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case SUCCESS_SHOW:
      return { ...state, show: true, msg: action.payload };
    case SUCCESS_HIDE:
      return { ...state, ...DEFAULT_STATE };
    default:
      return state;
  }
}
