import axios from 'axios';

import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from '../store/actionTypes.js';

export function createBook(title) {
  return async (dispatch) => {
    // dispatch load
    try {
      const id = await getRandomNum();
      dispatch({ type: ADD_BOOK, payload: { title, id } });
    } catch (error) {
      console.log(error);
    }
  };
}
// export async function editBookById(id, newTitle) {
//   return { type: EDIT_BOOK, payload: { id, newTitle } };
// }
// export async function deleteBookById(id) {
//   return { type: REMOVE_BOOK, payload: { id } };
// }

async function getRandomNum() {
  const config = {};
  try {
    const result = await axios.get('http://localhost:3001/random', config);
    return result.data.randomNumber;
  } catch (error) {
    return null;
  }
}
