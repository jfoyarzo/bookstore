/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/book.css';

const Book = (props) => {
  const {
    title, author, id, category,
  } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book-wrapper">
      <div className="text-wrapper">
        <h3>{category}</h3>
        <h2>{title}</h2>
        <p>{author}</p>
      </div>
      <div className="button-wrapper">
        <div className="vertical-line" />
        <button type="button" onClick={handleClick}>Remove</button>
      </div>
    </div>
  );
};

export default Book;
