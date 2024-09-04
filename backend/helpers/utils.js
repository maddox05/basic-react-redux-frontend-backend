import { getCurTimeUTCFormatted } from "./dateFunctions.js";
export function errLogging(err, errMsg) {
  console.log(`[${getCurTimeUTCFormatted()}] ${errMsg}\n${err}`);
}
