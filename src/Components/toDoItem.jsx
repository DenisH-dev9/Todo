import React, {useContext} from "react";
import { Context } from "./context";

    export default function ToDoItem({id, value, completed}) {

        const {toggleTodo, removeTodo} = useContext(Context)

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
