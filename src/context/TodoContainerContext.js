import React, { createContext, useState } from "react";

//referencia al context
export const TodoContainerContext = createContext();

// Provider es donde se encuentran las funciones y state
const TodoContainerProvider = (props) => {
  //Boilerplate code= secciones de código que se repiten
  //en varios lugares con poca o ninguna variación

  const [resetForm, setResetForm] = useState(false);
  const [newTask, setNewTask] = useState(null);
  const [updateTask, setUpdateTask] = useState(null);
  const [isEditOrAdd, setIsEditOrAdd] = useState("Create a New Task");
  const [taskForUpdate, setTaskForUpdate] = useState({});

  const onSubmit = (data) => {
    if (isEditOrAdd == "Create a New Task") {
      setNewTask(data);
    } else {
      setUpdateTask(data);
    }
  };

  return (
    //los componentes estaran disponibles en props.children
    <TodoContainerContext.Provider
      //valores disponibles en los componentes
      value={{
        resetForm,
        setResetForm,
        newTask,
        setNewTask,
        onSubmit,
        updateTask,
        isEditOrAdd,
        setIsEditOrAdd,
        taskForUpdate,
        setTaskForUpdate,
      }}
    >
      {props.children}
    </TodoContainerContext.Provider>
  );
};

export default TodoContainerProvider;
