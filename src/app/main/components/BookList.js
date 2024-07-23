import React from 'react';
import { connect } from 'react-redux';

import BookShow from './BookShow.js';
import { Segment } from 'semantic-ui-react';

/**
 *
 * @param {Array} books
 * @param {function} onEdit
 * @param {function} onDel
 * @returns
 */
function mapBooksToShow(books) {
  return books.map((book, index) => {
    return <BookShow key={book.id} id={book.id} title={book.title} />;
  });
}

function BookList({ books, loading }) {
  return (
    <Segment basic loading={loading}>
      {mapBooksToShow(books)}
    </Segment>
  );
}

function mapStateToProps(state) {
  return {
    books: state.bookList.books,
    loading: state.loading.loading,
  };
}

export default connect(mapStateToProps, {})(BookList);
