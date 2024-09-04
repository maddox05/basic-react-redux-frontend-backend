import { combineReducers } from 'redux';
import { LOADING_OFF, LOADING_ON } from './actionTypes.js';

import bookList from '../main/reducers.js';
import flashMessage from '../sharedComponents/FlashMessage/reducers.js';

const DEFAULT_STATE = {
  loading: false,
};

function loadingReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case LOADING_ON:
      return { ...state, loading: true };
    case LOADING_OFF:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default combineReducers({ flashMessage, bookList, loading: loadingReducer });
