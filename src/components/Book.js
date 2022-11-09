/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(removeBook(id));
  };
  return (
    <div className="book-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" style={{ width: '5em' }} onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Book;
