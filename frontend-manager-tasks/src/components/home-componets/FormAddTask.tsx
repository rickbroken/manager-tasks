import { ChangeEvent, FormEvent, useState } from "react";
import { FormAddTaskProps, InterfaceCreateTask } from "./interfaces/home.interface";
import { useTasks } from "../../hooks/useTasks";
import Swal from 'sweetalert2'
import BtnFormNote from "../btns-components/BtnFormNote";

const FormAddTask = ({setAddingNewTask}: FormAddTaskProps) => {
  const [task, setTask] = useState<InterfaceCreateTask>(Object);
  const { addTask } = useTasks();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const rest = await addTask(task);
    if(rest.status === 201) {
      Swal.fire({
        title: "Tarea agregada",
        icon: "success",
        confirmButtonText: "Okey :D"
      });
      setTask({} as InterfaceCreateTask);
      setAddingNewTask(false);
    } else {
      Swal.fire({
        title: "Hubo un error al agregar la tarea",
        icon: "error",
        confirmButtonText: "Okey :c"
      });
    }
  }

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Titulo de la tarea"
          className="
              w-full
              p-2 my-2
              bg-gray-100
              focus:outline-gray-200
              "
          value={task?.title ?? ''}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Descripción de la tarea"
          className="
                w-full
                p-2 my-2 
              bg-gray-100
              focus:outline-gray-200
                min-h-40
              "
          value={task?.description ?? ''}
          onChange={handleChange}
        >
        </textarea>

        <BtnFormNote
          name="Agregar Tarea"
          type="save"
        />

        <BtnFormNote
          onClick={() => {setAddingNewTask(false)}}
          name="Cancelar"
          type="cancel"
        />

        <hr className="text-gray-200 my-5" />
      </form>
    </>
  );
}

export default FormAddTask;