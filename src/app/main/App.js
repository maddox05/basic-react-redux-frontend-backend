import React, { useEffect, useRef, useState } from 'react';
import { Segment } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { createBook, deleteBookById, getAllBooks, updateBookById } from './actions.js';
import BookCreate from './components/BookCreate.js';
import BookList from './components/BookList.js';

function App({ books, loading, createBook, getAllBooks, updateBookById, deleteBookById }) {
  const hasFetched = useRef(false);
  useEffect(() => {
    if (!books && !loading && !hasFetched.current) {
      hasFetched.current = true;
      getAllBooks();
    }
  }, [books, loading, getAllBooks]);

  return (
    <Segment>
      <BookCreate onCreateBook={createBook} />
      {books ? <BookList loading={loading} books={books} onEdit={updateBookById} onDel={deleteBookById} /> : null}
    </Segment>
  );
}

function mapStateToProps(state) {
  return {
    books: state.bookList.books,
    loading: state.loading.loading,
  };
}

export default connect(mapStateToProps, { createBook, getAllBooks, updateBookById, deleteBookById })(App);
