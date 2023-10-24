import React, { useContext } from "react";
import { Context } from "./context";

export default function ToDoItem({ id, value, description, completed, setModalActive}) {
  const { toggleTodo, removeTodo, openModal} = useContext(Context);

  return (
    <li>
      <label className="toDoItem">
        <input
          type="checkbox"
          className="customCheckbox"
          defaultChecked={completed}
          onClick={() => {
            toggleTodo(id);
          }}
        />
        <details 
          className={completed ? "strikeText" : "value"}
        >
          <summary className="titleTodo">
            {value}
          </summary>
          <p className="descriptionTodo">Description: {description}</p>
        </details>
        <button
          className="editTodo"
          onClick={() => {
            setModalActive(true);
            openModal(id, value, description);
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/7398/7398464.png"
            alt="Edit"
          />
        </button>
        <button
          className="deleteTodo"
          onClick={() => {
            removeTodo(id);
          }}
        >
          <span></span>
        </button>
      </label>
    </li>
  );
}
