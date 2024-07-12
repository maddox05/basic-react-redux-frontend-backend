function createBook(title) {
  const book = {
    id: Math.round(Math.random() * 99999),
    title,
  };
  setBooks([...books, book]);
}
function editBook(id, newTitle) {
  const newBooks = books.map((book, index) => {
    if (book.id === id) {
      return { ...book, title: newTitle };
    }
    return book;
  });
  setBooks(newBooks);
}
function deleteBookById(id) {
  const newBooks = books.filter((book, index) => {
    return book.id !== id;
  });
  setBooks(newBooks);
}
