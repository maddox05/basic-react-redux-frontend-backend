import React, { useEffect, useRef, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createBook, getAllBooks } from './actions.js';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';

function App({ books, loading, createBook, getAllBooks }) {
  const hasFetched = useRef(false);
  useEffect(() => {
    if (!books && !loading && !hasFetched.current) {
      hasFetched.current = true;
      getAllBooks();
    }
  }, [books, loading, getAllBooks]);
  // function handleCreateBook(title) {
  //   createBook(title);
  // }

  return (
    <Segment>
      <BookCreate onCreateBook={createBook} />
      {books ? <BookList loading={loading} books={books} /> : null}
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
