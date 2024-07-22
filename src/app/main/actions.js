import { standardApiCall } from '../../api.js';
import { showFlashMessage } from '../sharedComponents/FlashMessage/actions.js';

import { POST_ADD_BOOK, LOAD_BOOKS } from '../store/actionTypes.js';

export function createBook(title) {
  if (!title)
    return function (dispatch) {
      dispatch(showFlashMessage('add book', 'pls'));
    };
  return standardApiCall(
    'post',
    'http://localhost:3001/api/books/create',
    null,
    { params: { title } },
    null,
    POST_ADD_BOOK,
    'failed to get book',
  );
}

export function getAllBooks() {
  return standardApiCall('get', 'http://localhost:3001/api/books/', null, null, null, LOAD_BOOKS, 'failed to get books');
}
