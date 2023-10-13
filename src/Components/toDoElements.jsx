import React from "react";
import ToDoItem from "./toDoItem";

export default function ToDoElements ({todos,toggleTodo, removeTodo}) {
    return (
            <div className="toDoElements">
                <ul>
                {todos.map(todos => <ToDoItem
                key={todos.id}
                id={todos.id}
                value={todos.value}
                completed={todos.completed}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                {...todos} />)}
                </ul>
            </div>
    );
};