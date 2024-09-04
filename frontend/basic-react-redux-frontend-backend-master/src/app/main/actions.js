import { standardApiCall } from '../../api.js';
import { showFlashMessage } from '../sharedComponents/FlashMessage/actions.js';

import { ADD_BOOK, DELETE_BOOK, LOAD_BOOKS, UPDATE_BOOK } from '../store/actionTypes.js';

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
    ADD_BOOK,
    'failed to get book',
  );
}

export function getAllBooks() {
  return standardApiCall('get', 'http://localhost:3001/api/books/', null, null, null, LOAD_BOOKS, 'failed to get books');
}

export function updateBookById(id, newTitle) {
  return standardApiCall(
    'patch',
    'http://localhost:3001/api/books/update',
    null,
    { params: { newTitle, id } },
    null,
    UPDATE_BOOK,
    'failed to update book',
  );
}

export function deleteBookById(id) {
  return standardApiCall(
    'delete',
    'http://localhost:3001/api/books/delete',
    null,
    { params: { id } },
    null,
    DELETE_BOOK,
    'failed to delete book',
  );
}
