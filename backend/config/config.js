import dotenv from "dotenv";
import path from "path";
dotenv.config({
  path: "../secrets.env",
});
export const maddoxMSSQLTestDBConfig = {
  user: process.env.MADDOX_MSSQL_USERNAME,
  password: process.env.MADDOX_MSSQL_PASSWORD,
  server: process.env.MADDOX_MSSQL_SERVER,
  database: process.env.MADDOX_MSSQL_TEST_DB,
  options: {
    encrypt: true,
    abortTransactionOnError: true,
  },
  pool: {
    max: 30,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};
