import React from 'react';

const Form = () => (
  <form style={{ marginTop: '1.5em' }} onSubmit={(e) => e.preventDefault()}>
    <h2>Add new Book</h2>
    <div className="input-wrapper" style={{ display: 'flex' }}>
      <input type="text" id="title" name="title" placeholder="Book Title" />
      <input type="text" id="author" name="author" placeholder="Author" />
      <button type="submit">Add Book</button>
    </div>
  </form>
);

export default Form;
