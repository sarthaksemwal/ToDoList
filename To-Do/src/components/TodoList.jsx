import React from "react";
import ToDoCard from "./ToDoCard";

const TodoList = (props) => {
  const { todos, selectedTab } = props;

  const filterTodoList =
    selectedTab === "All"
      ? todos
      : selectedTab === "completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterTodoList.map((todo, todoIndex) => {
        return (
          <ToDoCard
            key={todoIndex}
            todoIndex={todoIndex}
            {...props}
            todo={todo}
          />
        );
      })}
    </>
  );
};

export default TodoList;
