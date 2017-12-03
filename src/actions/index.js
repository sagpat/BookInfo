
// selectBook is an ActionCreator, it needs to return an action, an object with array type.
export function selectBook(book){
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
