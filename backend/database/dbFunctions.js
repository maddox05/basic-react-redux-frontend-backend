import sql from "mssql";
import { maddoxMSSQLTestDBConfig } from "../config/config.js";

/**
 * @typedef {Object} cmdInput
 * @prop {String} name name of variable when you use @ in sql
 * @prop {sqlDataTYpe} type ex. sql.VarChar
 * @prop {Any} value the data you wanna pass in for the input
 *
 */

/**
 * Used to follow a standard for making and executing mssql querys
 */
export default class sqlExe {
  constructor() {
    this.inputs = [];
  }
  /**
   *
   * @param {String} name variable in sql ex. "@title"
   * @param {sql} type type of sql variable ex. "@sql.Int" MUST IMPORT SQL
   * @param {*} value value for use by sql, must match sql type
   */
  input(name, type, value) {
    this.inputs.push({
      name,
      type,
      value,
    });
    return this;
  }

  /**
   * This is a good function for executing querys, just send it the sql command you want to run and
   * the inputs (variables) you want it to have.
   *
   * @param {String} sqlCommand sql command that simple, uses params as input vars
   * @param {Array<cmdInput>} params
   * @returns {Array<Object>} returns an array of objects from your sql query
   * @throws {Error} throws a sql error, make sure to use try & catch
   */
  async executeCommand(sqlCommand) {
    try {
      const connection = await (
        await sql.connect(maddoxMSSQLTestDBConfig)
      ).request();
      for (let i = 0; i < this.inputs.length; i++) {
        await connection.input(
          this.inputs[i].name,
          this.inputs[i].type,
          this.inputs[i].value
        );
      }
      let result = null;
      if (sqlCommand.includes(" ")) {
        result = await connection.query(sqlCommand);
      } else {
        result = await connection.execute(sqlCommand);
      }
      return result.recordset;
    } catch (error) {
      throw error;
    }
  }
}
