import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        value={value}
        placeholder="What is today's task?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="btn btn-primary todo-btn">
        Add
      </button>
    </form>
  );
};
