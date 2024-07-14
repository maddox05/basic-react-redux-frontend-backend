import React, { useReducer, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createBook, deleteBookById, editBookById } from './actions.js';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';

function App({ books, createBook }) {
  function handleCreateBook(title) {
    createBook(title);
  }

  return (
    <Segment>
      <BookCreate onCreateBook={handleCreateBook} />
      <BookList books={books} />
    </Segment>
  );
}

function mapStateToProps(state) {
  return {
    books: state.bookList.books,
  };
}

export default connect(mapStateToProps, { createBook })(App);
