import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onDeleteTask }) => {
  if (tasks.length === 0) {
    return null; 
  };

  return (
    <ul className="list-group mt-3">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          index={index}
          taskText={task}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;