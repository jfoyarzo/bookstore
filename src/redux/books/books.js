const BOOK_ADDED = 'bookstore/books/BOOK_ADDED';
const BOOK_REMOVED = 'bookstore/books/BOOK_REMOVED';

const addBook = (name, author, id) => ({ type: BOOK_ADDED, payload: { name, author, id } });

const removeBook = (id) => ({ type: BOOK_REMOVED, payload: id });

const reducer = (state = [], action) => {
  switch (action.type) {
    case BOOK_ADDED: {
      const { name, author, id } = action.payload;
      return [...state, { name, author, id }];
    }
    case BOOK_REMOVED: {
      const { id } = action.payload;
      const filteredArray = state.filter((book) => book.id !== id);
      return filteredArray;
    }
    default:
      return state;
  }
};

export default reducer;
export { addBook, removeBook };
