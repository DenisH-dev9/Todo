import React from "react";
import ToDoItem from "./toDoItem";

export default function ToDoElements({
  todos,
  setModalActive,
  selectedTodoId,
  setSelectedTodoId
}) {
  return (
    <div className="toDoElements">
      <ul>
        {todos.map((todos) => (
          <ToDoItem
            key={todos.id}
            id={todos.id}
            value={todos.value}
            description={todos.description}
            completed={todos.completed}
            setModalActive={setModalActive}
            selectedTodoId={selectedTodoId}
            setSelectedTodoId={setSelectedTodoId}
            {...todos}
          />
        ))}
      </ul>
    </div>
  );
}
