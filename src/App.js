import React, { useReducer, useState } from 'react';
import { Segment } from 'semantic-ui-react';

import reduce from './reducer.js';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function booksToBookComp() {}

export default function App() {
  const [books, setBooks] = useState([]);
  const [state, dispatch] = useReducer(reduce, []);

  function handleCreateBook(title) {
    const book = {
      id: Math.round(Math.random() * 99999),
      title,
    };
    setBooks([...books, book]);
  }
  function handleEditBook(id, newTitle) {
    const newBooks = books.map((book, index) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(newBooks);
  }
  function handleDeleteBook(id) {
    const newBooks = books.filter((book, index) => {
      return book.id !== id;
    });
    setBooks(newBooks);
  }

  return (
    <Segment>
      <BookCreate onCreateBook={handleCreateBook} />
      <BookList books={books} onEdit={handleEditBook} onDel={handleDeleteBook} />
    </Segment>
  );
}
