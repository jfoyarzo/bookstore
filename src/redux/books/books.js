import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qo8LZ6Txlu6FMjkuPrCj/';

const initialState = [
  { title: 'The Hunger Games', author: 'Suzanne Collins', id: '1' }, { title: 'Naked Lunch', author: 'William S. Burroughs', id: '2' },
];

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios(url);
    return response.data;
  },
);

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
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      const books = [...state, action.payload];
      return books;
    },
  },
});

export default booksSlice.reducer;
export const { addBook, removeBook } = booksSlice.actions;
