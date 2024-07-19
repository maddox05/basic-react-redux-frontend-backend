import { ERROR_HIDE, ERROR_SHOW } from '../../store/actionTypes.js';

const DEFAULT_STATE = {
  error: null,
  errorMsg: '',
  show: false,
};

export default function errorReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ERROR_SHOW:
      return { ...state, error: action.payload.error, errorMsg: action.payload.errorMsg, show: true };
    case ERROR_HIDE:
      return { ...DEFAULT_STATE, show: false };
    default:
      return state;
  }
}
