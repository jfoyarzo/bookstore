import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const [title, author] = event.target;
    dispatch(addBook({ title: title.value, author: author.value, id: uuidv4() }));
    title.value = '';
    author.value = '';
  };

  return (
    <form style={{ marginTop: '1.5em' }} onSubmit={handleSubmit}>
      <h2>Add new Book</h2>
      <div className="input-wrapper" style={{ display: 'flex' }}>
        <input type="text" id="title" name="title" placeholder="Book Title" />
        <input type="text" id="author" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

export default Form;
