import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from './store/actionTypes.js';

export default function bookReducer(state, action) {
  switch (action.type) {
    case ADD_BOOK:
      const book = {
        id: action.payload.id,
        title: action.payload.title,
      };
      return { ...state, books: [...state.books, book] };
    case EDIT_BOOK:
      const editedBooks = state.books.map((book) => {
        if (book.id === action.payload.id) {
          return { ...book, title: action.payload.newTitle };
        }
        return book;
      });
      return { ...state, books: editedBooks };
    case REMOVE_BOOK:
      const removedBooks = state.books.filter((book) => {
        return book.id !== action.payload.id;
      });
      return { ...state, books: removedBooks };
    default:
      console.log(`Action ${action.type} Not Found`);
      return state;
  }
}
