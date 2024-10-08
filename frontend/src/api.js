import axios from 'axios';
import { showFlashMessage } from './app/sharedComponents/FlashMessage/actions.js';
import { LOADING_OFF, LOADING_ON, HIDE_FLASH } from './app/store/actionTypes.js';
/**
 * A redux thunk standard get
 *
 * @param {String} method get post put patch delete
 * @param {String} route where you wanna send data
 * @param {Object} [data] data you wanna send
 * @param {AxiosRequestConfig} [config] axios config to send the axios get
 * @param {String} [fetchAction] the constant you have in your reducer to do set loading
 * @param {String} loadedState the constant you have in your reducer to set the data
 * @param {String} [errorMsg] error message you want to show on screen if there an error
 * @returns dispatches an action to the reducer with a action.payload of the data
 */
export function standardApiCall(method, route, data = null, config = null, fetchAction = null, loadedState, errorMsg = null) {
  return async function (dispatch) {
    dispatch({ type: LOADING_ON });

    if (fetchAction) dispatch({ type: fetchAction });
    try {
      let result = null;
      if (method === 'post' || method === 'put' || method === 'patch') {
        result = (await axios[method.toLowerCase()](route, data, config)).data;
      } else if (method === 'get' || method === 'delete') {
        result = (await axios[method.toLowerCase()](route, config)).data;
      } else {
        dispatch(showFlashMessage('axios function not found', 'err'));
        return;
      }
      dispatch({ type: loadedState, payload: result });
      dispatch({ type: LOADING_OFF });
      dispatch({ type: HIDE_FLASH });
    } catch (error) {
      console.log(error);
      dispatch(showFlashMessage('oh no bro', String(error)));
    }
  };
}
