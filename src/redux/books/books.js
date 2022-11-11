/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import arrayTransform from '../../utils/convertToArray';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Qo8LZ6Txlu6FMjkuPrCj/books/';

const initialState = [];

export const getBooks = createAsyncThunk(
  'books/getBooks',
  async () => {
    const response = await axios(url);
    return response.data;
  },
);

export const addBook = createAsyncThunk(
  'books/addBook',
  async (payload) => {
    const response = await axios.post(url, payload);
    return response.data;
  },
);

export const removeBook = createAsyncThunk(
  'books/removeBook',
  async (id) => {
    const response = await axios.delete(`${url}${id}`);
    return response.data;
  },
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => {
      const object = action.payload;
      const bookArray = arrayTransform(object);
      return [...bookArray];
    },
    [addBook.fulfilled]: (state, action) => [...state, action.meta.arg],
    [removeBook.fulfilled]: (state, action) => {
      const itemId = action.meta.arg;
      return [...state.filter((book) => book.item_id !== itemId)];
    },
  },
});

export default booksSlice.reducer;
