import sql from "mssql";
import dbManager from "../../database/dbFunctions.js";

export async function createBook(title) {
  const sqlCommand = `
    INSERT INTO dbo.books (title) OUTPUT inserted.id, inserted.title VALUES (@title)`;

  return await new dbManager()
    .input("title", sql.VarChar(127), title)
    .executeCommand(sqlCommand);
}

export async function getAllBooks() {
  const sqlCommand = `
    SELECT books.id,books.title FROM dbo.books ORDER BY id DESC`;
  return await new dbManager().executeCommand(sqlCommand);
}

export async function updateBookById(id, newTitle) {
  const sqlCommand = `UPDATE books SET title = @newTitle OUTPUT inserted.id, inserted.title WHERE id = @id`;
  return await new dbManager()
    .input("newTitle", sql.VarChar(63), newTitle)
    .input("id", sql.Int, id)
    .executeCommand(sqlCommand);
}

export async function deleteBookById(id) {
  const sqlCommand = `DELETE FROM books OUTPUT deleted.id, deleted.title WHERE id = @id`; //DELETE FROM books OUTPUT deleted.id, deleted.title WHERE id = @id
  return await new dbManager()
    .input("id", sql.Int, id)
    .executeCommand(sqlCommand);
}
