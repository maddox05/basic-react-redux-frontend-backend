import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';

import BookCreate from './components/BookCreate';

function booksToBookComp() {}

export default function App() {
  const [books, setBooks] = useState([]);
  /**
   * @param {object}
   */
  function handleCreateBook(title) {
    const book = {
      id: 1,
      title,
    };
    setBooks([...books, book]);
  }
  return (
    <Segment>
      <BookCreate onCreateBook={handleCreateBook} />
    </Segment>
  );
}
