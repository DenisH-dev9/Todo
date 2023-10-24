import React, { useState, useEffect } from "react";
import ToDoElements from "./toDoElements";
import Modal from "./Modal";
import { Context } from "./context";

const Main = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [todoValue, setTodoValue] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const [selectedTodoId, setSelectedTodoId] = useState();
  const [selectedTodoValue, setSelectedTodoValue] = useState();
  const [selectedTodoDescription, setSelectedTodoDescription] = useState();

  const addTodo = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          value: todoValue,
          description: "",
          completed: false,
        },
      ]);
      setTodoValue("");
    }
  };

  const addTodobtn = () => {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          value: todoValue,
          description: "",
          completed: false,
        },
      ]);
      setTodoValue("");
  };

  const openModal = (id, value, description) => {
    setSelectedTodoId(id);
    setSelectedTodoValue(value);
    setSelectedTodoDescription(description);
  }

  const editTodo = (todoValue, todoDescription) => {
    setTodos([
      ...todos.map((todos) => {
      return  (
        todos.id === selectedTodoId
          ? { ...todos, value: todoValue, 
            description: todoDescription }
          : { ...todos }
      )}),
    ]);
  };
  



  const removeTodo = (id) => {
    if (id) {
      setTodos([...todos.filter((todos) => todos.id !== id)]);
    }
  };

  const toggleTodo = (id) => {
    setTodos([
      ...todos.map((todos) =>
        todos.id === id
          ? { ...todos, completed: !todos.completed }
          : { ...todos }
      ),
    ]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Context.Provider
      value={{
        removeTodo,
        toggleTodo,
        openModal,
        editTodo,
      }}
    >
      <>
        <div className="container">
          <div className="toDoList">
            <h1 className="pageTitle">To Do List</h1>
            <div className="input">
            <textarea
              type="text"
              className="toDoInput"
              placeholder="What do you need to do?"
              value={todoValue}
              onChange={(event) => setTodoValue(event.target.value)}
              onKeyPress={addTodo}
              autoFocus
            />
            <button className="addTodobtn" onClick={() => addTodobtn(todoValue)}>+</button>
            </div>
            <ToDoElements
              todos={todos}
              setModalActive={setModalActive}
              selectedTodoId={selectedTodoId}
              setSelectedTodoId={setSelectedTodoId}
            />
          </div>
        </div>
      </>
      <Modal
      modalActive={modalActive}
      setModalActive={setModalActive}
      todos={todos}
      selectedTodoId={selectedTodoId}
      selectedTodoValue={selectedTodoValue}
      setSelectedTodoValue={setSelectedTodoValue}
      selectedTodoDescription={selectedTodoDescription}
      setSelectedTodoDescription={setSelectedTodoDescription}
      />
    </Context.Provider>
  );
};

export default Main;
