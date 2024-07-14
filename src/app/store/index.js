import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

import rootReducer from './reducer.js';

export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
