/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="component-container" style={{ padding: '1em 3em' }}>
      <div
        className="book-list"
        style={{
          width: '60vw', height: '60vh', border: '1px solid black', padding: '1.5em',
        }}
      >
        { books.map((book) => (
          <Book key={book.item_id} title={book.title} author={book.author} id={book.item_id} />
        ))}
      </div>
      <Form />
    </div>
  );
};

export default Books;
