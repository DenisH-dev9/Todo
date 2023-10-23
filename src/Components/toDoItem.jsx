import React, { useContext } from "react";
import { Context } from "./context";

export default function ToDoItem({ id, value, completed, setModalActive, openModal}) {
  const { toggleTodo, removeTodo} = useContext(Context);

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
        <span
          className={completed ? "strikeText" : "value"}
          onClick={() => {
            toggleTodo(id);
          }}
        >
          {value}
        </span>
        <button
          className="editTodo"
          onClick={() => {
            setModalActive(true);
            openModal(id);
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
