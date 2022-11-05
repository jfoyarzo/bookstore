/* eslint-disable react/prop-types */
import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="book-wrapper" style={{ display: 'flex', flexDirection: 'column' }}>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" style={{ width: '5em' }}>Remove</button>
    </div>
  );
};

export default Book;
