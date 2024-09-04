import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS, UPDATE_BOOK } from '../store/actionTypes.js';

const DEFAULT_STATE = {
  books: null,
};

export default function bookReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...action.payload, ...(state.books || [])] };
    case LOAD_BOOKS:
      return { ...state, books: [...(state.books || []), ...action.payload] };
    case UPDATE_BOOK:
      const updatedBooks = state.books.map((book) => {
        if (book.id === action.payload[0].id) {
          return { ...action.payload[0] };
        }
        return { ...book };
      });
      return { ...state, books: updatedBooks };
    case DELETE_BOOK:
      const deletedBooks = state.books.filter((book) => {
        return book.id !== action.payload[0].id;
      });
      return { ...state, books: deletedBooks };
    default:
      return state;
  }
}
