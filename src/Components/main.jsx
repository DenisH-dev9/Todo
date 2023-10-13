import React, {useState, useEffect} from "react";
import ToDoElements from "./toDoElements"

const Main = () => {

    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
    );
    const [todoValue, setTodoValue] = useState('');

    useEffect (() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos]);



    const addTodo = event => {
        if(event.key === 'Enter') {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    value: todoValue,
                    completed: false
                }
            ])
            setTodoValue('')
            
        }
    }

    const removeTodo = (id) => {
        if (id) {
        setTodos([...todos.filter((todos) => todos.id !== id)])
        }
    }
    const toggleTodo = (id) => {
        setTodos([
            ...todos.map((todos) => 
            todos.id === id ? {...todos, completed: !todos.completed} : {...todos})
        ])
    }

    return (
        <>
            <div className="container">
                <div className="toDoList">
                    <h1 className="pageTitle">
                        To Do List
                    </h1>
                        <input type="text" 
                        className="toDoInput" 
                        placeholder="What do you need to do?"
                        value={todoValue}
                        onChange={event => setTodoValue(event.target.value)}
                        onKeyPress={addTodo}
                        autoFocus
                        />
                    <ToDoElements 
                    todos={todos} 
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    />
                </div>
            </div>
        </>
    );
};

export default Main;