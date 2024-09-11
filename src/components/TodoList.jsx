import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos } = props;

  return (
    <ul className="main" l>
      {todos.map((todo, todoIndex) => {
        return (
          //na ovoj nacin moze vo children elements da preneseme props mesto da gi dodavam gore vo const {} = props
          <TodoCard {...props} key={todoIndex} index={todoIndex}>
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
