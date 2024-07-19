import { combineReducers } from 'redux';
import { LOADING_OFF, LOADING_ON } from './actionTypes.js';

import bookList from '../main/reducers.js';
import errorHandler from '../sharedComponents/FlashError/reducers.js';
import successHandler from '../sharedComponents/FlashSuccess/reducers.js';

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

export default combineReducers({ successHandler, errorHandler, bookList, loading: loadingReducer });
