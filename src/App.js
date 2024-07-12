import React, { useReducer, useState } from 'react';
import { Segment } from 'semantic-ui-react';

import reduce from './reducer.js';
import { createBook, deleteBookById, editBookById } from './actions.js';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';

export default function App() {
  const [state, dispatch] = useReducer(reduce, { books: [] });

  async function handleCreateBook(title) {
    dispatch(await createBook(title));
  }

  async function handleEditBook(id, newTitle) {
    dispatch(await editBookById(id, newTitle));
  }

  async function handleDeleteBookbyId(id) {
    dispatch(await deleteBookById(id));
  }

  return (
    <Segment>
      <BookCreate onCreateBook={handleCreateBook} />
      <BookList books={state.books} onEdit={handleEditBook} onDel={handleDeleteBookbyId} />
    </Segment>
  );
}
