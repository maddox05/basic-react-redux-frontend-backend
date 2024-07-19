import { POST_ADD_BOOK, POST_ADD_BOOK_RES, REMOVE_BOOK, EDIT_BOOK } from '../store/actionTypes.js';

const DEFAULT_STATE = {
  books: [],
  loading: false,
};

export default function bookReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case POST_ADD_BOOK:
      return { ...state, loading: true };
    case POST_ADD_BOOK_RES:
      return { ...state, loading: false, books: [...state.books, action.payload] };
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
      return state;
  }
}
