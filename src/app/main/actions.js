import { standardApiCall } from '../../api.js';

import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK, POST_ADD_BOOK_RES, POST_ADD_BOOK, LOAD_BOOKS } from '../store/actionTypes.js';
import { showFlashMessage } from '../sharedComponents/FlashError/actions.js';

export function createBook(title) {
  return standardApiCall(
    'post',
    'http://localhost:3001/api/books/create',
    null,
    { params: { title } },
    POST_ADD_BOOK,
    POST_ADD_BOOK_RES,
    'failed to get book',
  );
}

export function getAllBooks() {
  return standardApiCall('get', 'http://localhost:3001/api/books/', null, null, null, LOAD_BOOKS, 'failed to get books');
}
