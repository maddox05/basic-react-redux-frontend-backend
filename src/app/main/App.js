import React, { useEffect, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createBook, getAllBooks } from './actions.js';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';

function App({ books, loading, createBook, getAllBooks }) {
  useEffect(() => {
    if (!books && !loading) {
      getAllBooks();
    }
  }, [books, loading]);
  // function handleCreateBook(title) {
  //   createBook(title);
  // }

  return (
    <Segment loading={loading}>
      <BookCreate onCreateBook={createBook} />
      {books ? <BookList books={books} /> : null}
    </Segment>
  );
}

function mapStateToProps(state) {
  return {
    books: state.bookList.books,
    loading: state.loading.loading,
  };
}

export default connect(mapStateToProps, { createBook, getAllBooks })(App);
