import React from "react";
import ToDoItem from "./toDoItem";

export default function ToDoElements({
  todos,
  toggleTodo,
  removeTodo,
  editTodo,
  setIsEditing,
  setModalActive,
  setNewValue,
  newValue,
  selectedTodoId,
  setSelectedTodoId,
  openModal
}) {
  return (
    <div className="toDoElements">
      <ul>
        {todos.map((todos) => (
          <ToDoItem
            key={todos.id}
            id={todos.id}
            value={todos.value}
            completed={todos.completed}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
            editTodo={editTodo}
            setIsEditing={setIsEditing}
            setModalActive={setModalActive}
            setNewValue={setNewValue}
            newValue={newValue}
            selectedTodoId={selectedTodoId}
            setSelectedTodoId={setSelectedTodoId}
            openModal={openModal}
            {...todos}
          />
        ))}
      </ul>
    </div>
  );
}
