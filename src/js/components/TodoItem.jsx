import React, { useState } from "react";

const TodoItem = ({ index, taskText, onDeleteTask }) => {
  const [hover, setHover] = useState(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{taskText}</span>
      {hover && (
        <button
          onClick={() => onDeleteTask(index)}
          className="btn btn-sm btn-danger"
        >
          🗑️
        </button>
      )}
    </li>
  );
};

export default TodoItem;