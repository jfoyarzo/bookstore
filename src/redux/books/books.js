import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', id: '1' }, { title: 'Naked Lunch', author: 'William S. Burroughs', id: '2' },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => {
      const itemId = action.payload;
      return [...state.filter((book) => book.id !== itemId)];
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
