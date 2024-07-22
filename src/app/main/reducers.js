import { POST_ADD_BOOK, LOAD_BOOKS } from '../store/actionTypes.js';

const DEFAULT_STATE = {
  books: null,
};

export default function bookReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case POST_ADD_BOOK:
      return { ...state, books: [...action.payload, ...(state.books || [])] };
    case LOAD_BOOKS:
      return { ...state, books: [...(state.books || []), ...action.payload] };
    default:
      return state;
  }
}
