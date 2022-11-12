import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';
import '../styles/form.css';

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const [title, author, category] = event.target;
    dispatch(addBook({
      title: title.value, author: author.value, category: category.value, item_id: uuidv4(),
    }));
    title.value = '';
    author.value = '';
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>ADD NEW BOOK</h2>
      <div className="input-wrapper">
        <input type="text" id="title" name="title" placeholder="Book Title" />
        <input type="text" id="author" name="author" placeholder="Author" />
        <select name="category" id="category">
          <option default selected disabled hidden>Choose a Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Biography">Biography</option>
          <option value="Historic">Historic</option>
          <option value="Other">Other</option>
        </select>
        <button type="submit">Add Book</button>
      </div>
    </form>
  );
};

export default Form;
