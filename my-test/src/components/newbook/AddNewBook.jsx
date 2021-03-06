/* import React, { useState } from "react";
import "./AddNewBook.css";
const AddNewBook = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const titleCHangeHandler = (event) => {
    console.log(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const newBookData = {
      title: enteredTitle,
      author: enteredAuthor,
    };
    console.log(newBookData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="addNew-book">
        <div className="new-book__controls">
          <div className="new-book__control">
            <label htmlFor="title">Title</label>
            <input type="text" onChange={titleCHangeHandler} />
          </div>
          <div className="new-book__control">
            <label htmlFor="title">Author</label>
            <input type="text" onChange={authorChangeHandler} />
          </div>
        </div>
        <div className="new-book__actions">
          <button className="submit">Add New book</button>
        </div>
      </div>
    </form>
  );
};

export default AddNewBook;
 */