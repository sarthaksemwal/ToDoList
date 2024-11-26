import React from "react";

const Header = (props) => {
  const { todos } = props;
  const todoLenght = todos.length;
  const isTaskPlural = todos.length != 1;
  const taskOrtask = isTaskPlural ? "tasks" : "task";
  return (
    <header>
      <h1 className="text-gradient">
        You Have {todoLenght} Open {taskOrtask}
      </h1>
    </header>
  );
};

export default Header;
