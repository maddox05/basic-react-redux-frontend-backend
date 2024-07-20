import { POST_ADD_BOOK, POST_ADD_BOOK_RES, LOAD_BOOKS } from '../store/actionTypes.js';

const DEFAULT_STATE = {
  books: null,
};

export default function bookReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case POST_ADD_BOOK_RES:
      return { ...state, books: [...(state.books || []), ...action.payload] };
    case LOAD_BOOKS:
      return { ...state, books: [...(state.books || []), ...action.payload] };
    default:
      return state;
  }
}
