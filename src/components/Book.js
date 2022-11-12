/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import progress from '../img/progress_1.png';
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
        <div className="book-control">
          <span>
            <button type="button">Comment</button>
            {' '}
            |
            {' '}
            <button type="button" onClick={handleClick}>Remove</button>
            {' '}
            |
            {' '}
            <button type="button">Edit</button>
            {' '}
          </span>
        </div>
      </div>
      <div className="progress-wrapper">
        <img src={progress} alt="progress oval" />
        <span>
          <p>0%</p>
          Completed
        </span>
      </div>
      <div className="button-wrapper">
        <div className="vertical-line" />
        <div className="progress-control">
          <p className="current">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 1</p>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
