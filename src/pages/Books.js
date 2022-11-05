import React from 'react';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => (
  <div className="component-container" style={{ padding: '1em 3em' }}>
    <div
      className="book-list"
      style={{
        width: '60vw', height: '60vh', border: '1px solid black', padding: '1.5em',
      }}
    >
      <Book title="The Hunger Games" author="Suzanne Collins" />
    </div>
    <Form />
  </div>
);

export default Books;
