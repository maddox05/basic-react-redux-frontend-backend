import React, { useReducer, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createBook, deleteBookById, editBookById } from './actions.js';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';
import FlashError from '../sharedComponents/FlashError/index.js';

function App({ books, loading, createBook }) {
  // function handleCreateBook(title) {
  //   createBook(title);
  // }

  return (
    <Segment loading={loading}>
      <BookCreate onCreateBook={createBook} />
      <BookList books={books} />
    </Segment>
  );
}

function mapStateToProps(state) {
  return {
    books: state.bookList.books,
    loading: state.loading.loading,
  };
}

export default connect(mapStateToProps, { createBook })(App);
