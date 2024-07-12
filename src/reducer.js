
export default function reducer(state, action){
  switch(action.type){
    case 'create_book':
      const book = {
        id: Math.round(Math.random() * 99999),
        title,
      };
      return [...state.books, book]
    default:
      return state;
  }
}