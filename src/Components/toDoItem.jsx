import React from "react";

    export default function ToDoItem({id, value, completed,toggleTodo, removeTodo}) {
        return (
                <li>
                    <label className="toDoItem">
                        <input 
                            type="checkbox"
                            defaultChecked={completed}
                            onClick={() => {toggleTodo(id)}}
                        />
                        <span
                            className={completed ? "strikeText" : "value"}
                            onClick={() => {toggleTodo(id)}}
                            >{value}
                        </span>
                        <button className="deleteTodo" onClick={() => {removeTodo(id)}}>
                            <span></span>
                        </button>
                    </label>
                </li>
        );
    };
