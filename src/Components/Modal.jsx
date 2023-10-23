import React from "react";
import { useForm } from "react-hook-form";


const Modal = ({modalActive, setModalActive, editTodo}) => {

  
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    editTodo(data.todoValue);
  }

  return(
    <div className={modalActive ? "modal active" : "modal"} onClick={() => setModalActive(false)}>
      <form onSubmit={handleSubmit(onSubmit)} className="modalContent" onClick={(e) => e.stopPropagation()}>
          <label>
            Value:
            <textarea
            {...register('todoValue')}
            className="formInput"
            />
          </label>
          
          <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Modal;
