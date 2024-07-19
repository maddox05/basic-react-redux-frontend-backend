import axios from 'axios';
import { showSuccessMessage } from './app/sharedComponents/FlashSuccess/actions.js';
import { showErrorMessage } from './app/sharedComponents/FlashError/actions.js';
import { LOADING_OFF, LOADING_ON } from './app/store/actionTypes.js';
/**
 * A redux thunk standard get
 *
 * @param {String} method get post put patch delete
 * @param {String} route where you wanna send data
 * @param {Object} [data] data you wanna send
 * @param {Object} [config] axios config to send the axios get
 * @param {String} [fetchAction] the constant you have in your reducer to do set loading
 * @param {String} loadedState the constant you have in your reducer to set the data
 * @param {String} [errorMsg] error message you want to show on screen if there an error
 * @returns dispatches an action to the reducer with a action.payload of the data
 */
export function standardApiCall(
  method,
  route,
  data = null,
  config = null,
  fetchAction = LOADING_ON,
  loadedState,
  errorMsg = null,
) {
  return async function (dispatch) {
    if (fetchAction) dispatch({ type: fetchAction });
    try {
      let result = null;
      if (method === 'post' || method === 'put' || method === 'patch') {
        result = (await axios[method.toLowerCase()](route, data, config)).data;
        dispatch(showSuccessMessage('w'));
      } else if (method === 'get' || method === 'delete') {
        result = (await axios[method.toLowerCase()](route, config)).data;
        dispatch(showSuccessMessage('w'));
      } else {
        dispatch(showErrorMessage(`${errorMsg}: ${'bruh'}`, 'red'));
        return;
      }
      dispatch({ type: loadedState, payload: result });
    } catch (error) {
      dispatch(showErrorMessage(`${errorMsg}: ${error}`, 'red'));
      dispatch({ type: LOADING_OFF });
    }
  };
}
