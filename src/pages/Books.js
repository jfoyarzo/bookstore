/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/books/books';
import '../styles/books.css';

const Books = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="component-container">
      <div className="book-list">
        { books.map((book) => (
          <Book
            key={book.item_id}
            title={book.title}
            author={book.author}
            id={book.item_id}
            category={book.category}
          />
        ))}
      </div>
      <hr />
      <Form />
    </div>
  );
};

export default Books;
