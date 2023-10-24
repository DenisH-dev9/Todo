import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Context } from "./context";


const Modal = ({modalActive, setModalActive, selectedTodoValue, setSelectedTodoValue, selectedTodoDescription, setSelectedTodoDescription}) => {
  const { editTodo } = useContext(Context);

  
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();


  const onSubmit = (data) => {
    editTodo(data.todoValue, data.todoDescription);
    setModalActive(false);
  }

  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    setSelectedTodoValue(newValue);
  };
  const handleDescriptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedTodoDescription(newValue);
  };

  return(
    <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
      <form onSubmit={handleSubmit(onSubmit)} className="modalContent" onClick={(e) => e.stopPropagation()}>
          <label>
            Title:
            <textarea
            {...register('todoValue')}
            className="formInput"
            value={selectedTodoValue}
            onChange={handleTitleChange}
            />
          </label>
          <label>
            Title:
            <textarea
            {...register('todoDescription')}
            className="formInput"
            value={selectedTodoDescription}
            onChange={handleDescriptionChange}
            />
          </label>
          <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  )
}

export default Modal;
