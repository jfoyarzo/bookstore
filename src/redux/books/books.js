const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const addBook = (payload) => ({ type: BOOK_ADDED, payload });

const removeBook = (id) => ({ type: BOOK_REMOVED, payload: id });

const reducer = (state = [{ title: 'The Hunger Games', author: 'Suzanne Collins', id: '1' }, { title: 'Naked Lunch', author: 'William S. Burroughs', id: '2' }], action) => {
  switch (action.type) {
    case BOOK_ADDED: {
      const { name, author, id } = action.payload;
      return [...state, { name, author, id }];
    }
    case BOOK_REMOVED: {
      const { id } = action.payload;
      return [...state.filter((book) => book.id !== id)];
    }
    default:
      return state;
  }
};

export default reducer;
export { addBook, removeBook };
