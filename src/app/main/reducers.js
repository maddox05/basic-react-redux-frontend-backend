import { POST_ADD_BOOK, POST_ADD_BOOK_RES, FETCH_BOOKS, LOAD_BOOKS } from '../store/actionTypes.js';

const DEFAULT_STATE = {
  books: [],
};

export default function bookReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case POST_ADD_BOOK:
      return { ...state };
    case POST_ADD_BOOK_RES:
      return { ...state, books: [...state.books, action.payload] };
    case FETCH_BOOKS:
      return {};

    default:
      return state;
  }
}
