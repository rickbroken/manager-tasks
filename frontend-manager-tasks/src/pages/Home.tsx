import ContTasks from "../components/home-componets/ContTasks";
import ContTask from "../components/home-componets/ContTask";
import { ChangeEvent, FormEvent, useState } from "react";

const Home = () => {
  const [task, setTask] = useState({ title: '', description: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
  }
  return (
    <>
      <section className="w-full flex gap-10">
        <ContTasks title="PENDIENTES" icon="lets-icons:subttasks" color="#FFD700">

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
            <button
              className="
                bg-[#00c33d]
                hover:bg-[#00af37]
                active:bg-[#009f35]
                w-full p-2
                cursor-pointer
                text-white
                transition-all
                duration-300 rounded-lg
                "
            >
              Add task
            </button>
            <hr className="text-gray-200 my-5"/>
          </form>

          <ContTask
            title="Llevar materiales a la obra"
            date="16 Sep 2024 - 10:09 am"
            colorTag="027ae7"
            BgColor="bg-amber-100"
          >
            Llevar cemento y barillas a la casa en construcción de la calle 5. Además, verificar que todos los materiales lleguen en buen estado y en la cantidad solicitada. Coordinar con el encargado de la obra para asegurar que todo esté listo para el inicio de la construcción. r con el encargado de la obra para asegurar que todo esté listo para el inicio de la construcción.
          </ContTask>
        </ContTasks>

        <ContTasks title="EN PROCESO" icon="uim:process" color="#1ba0ae">

        </ContTasks>

        <ContTasks title="TERMINADAS" icon="icon-park-twotone:success" color="#00bf02">

        </ContTasks>
      </section>
    </>
  );
}

export default Home;