import React from 'react';

import BookShow from './BookShow.js';
import { Segment } from 'semantic-ui-react';

/**
 *
 * @param {Array} books
 * @param {function} onEdit
 * @param {function} onDel
 * @returns
 */
function mapBooksToShow(books, onEdit, onDel) {
  return books.map((book, index) => {
    return <BookShow key={book.id} onDel={onDel} onEdit={onEdit} id={book.id} title={book.title} />;
  });
}

export default function BookList({ books, onEdit, onDel, loading }) {
  return (
    <Segment basic loading={loading}>
      {mapBooksToShow(books, onEdit, onDel)}
    </Segment>
  );
}
