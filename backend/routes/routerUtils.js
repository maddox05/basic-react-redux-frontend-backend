import { getCurTimeUTCFormatted } from "../helpers/dateFunctions.js";
/**
 * gives a base format for the 200 response
 * @param {Array<Object>} data data to be sent over to the caller
 * @param {Object} queryParams paramters to go into the queryParams object
 * @returns {Object} object to send back to the user in a response
 */
export function common200ResponseJSON(data, queryParams) {
  return {
    status: 200,
    queryParams,
    timestamp: getCurTimeUTCFormatted(),
    data,
  };
}

/**
 *
 * @param {Integer} status status number you want to send to the user
 * @param {String} error error message
 * @param {Object} queryParams queryParams the user sent
 * @returns {Object} object to send back to the user in a response
 */
export function commonErrorResponseJSON(status, error, queryParams) {
  return { status, queryParams, timestamp: getCurTimeUTCFormatted(), error };
}
