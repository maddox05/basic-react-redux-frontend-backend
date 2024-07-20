import React from 'react';

import BookShow from './BookShow.js';

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

export default function BookList({ books, onEdit, onDel }) {
  console.log(books);
  return mapBooksToShow(books, onEdit, onDel);
}
