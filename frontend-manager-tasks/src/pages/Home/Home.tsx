import ContTasks from "../../components/home-componets/ContTasks";
import ContTask from "../../components/home-componets/ContTask";
import { GetInterfaceTask } from "../../api/interfaces/axios.interfaces";
import { format, getTime } from "date-fns";
import FormAddTask from "../../components/home-componets/FormAddTask";
import { ChangeEvent, useState } from "react";
import { useTasks } from "../../hooks/useTasks";
import { Icon } from "@iconify/react/dist/iconify.js";
import { listTagsDefault } from "../../components/home-componets/lib/listTagas";
import { InterfaceTags } from "../../components/home-componets/interfaces/home.interface";

const Home = () => {
  const [addingNewTask, setAddingNewTask] = useState(false);
  const [textSearch, setTextSearch] = useState('');

  const { tasks, isLoading, isError, setSearch, selectedTag, setSelectedTag } = useTasks();


  return (
    <>
      <section className="w-full flex flex-col gap-10">
        <div className="w-full flex items-center justify-between">
          <input
            className="
              bg-white px-3 py-2
              rounded-lg w-8/12
              border border-gray-400
              focus:outline-gray-400
              "
            type="text"
            placeholder="Buscar tarea..."
            value={textSearch}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setTextSearch(e.target.value);
            }}
          />

          <select
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
            className="border border-gray-400 p-2 rounded-md focus:outline-gray-400"
          >
            <option value="">Todas las etiquetas</option>
            {listTagsDefault.map((tag: InterfaceTags) => (
              <option key={tag.id} value={tag.name}>
                {tag.name}
              </option>
            ))}
          </select>

          <button
            className="
            border-2 border-blue-900
            bg-transparent
            hover:bg-blue-900
            hover:text-white
            active:bg-blue-950
            text-blue-900 px-5 rounded-lg py-2
            flex items-center justify-center
            gap-2 cursor-pointer font-[500]
            "
            onClick={() => setSearch(textSearch)}
          >
            <Icon icon="tabler:search" width="20" height="20" />
            Buscar
          </button>
          <button
            className="
            border-2 border-red-500
            hover:bg-red-600
            hover:text-white
            active:bg-red-700
            text-red-500 px-5 rounded-lg py-2
            flex items-center justify-center
            gap-2 cursor-pointer
            "
            onClick={() => {
              setTextSearch('');
              setSearch('');
              setSelectedTag('');
            }}
          >
            <Icon icon="fluent:delete-28-regular" width="20" height="20" />
            Limpiar
          </button>


        </div>

        <div className="flex w-full gap-10">
          <ContTasks title="PENDIENTES" icon="lets-icons:subttasks" color="#FFD700" setAddingNewTask={setAddingNewTask}>

            {addingNewTask && <FormAddTask setAddingNewTask={setAddingNewTask} />}

            {isLoading && <p>Loading...</p>}
            {isError && tasks?.length === 0 && <p>Error en la peticion</p>}
            {!isLoading && !isError && tasks?.length === 0 && <p className="text-center italic">No hay tareas :)</p>}
            {tasks?.map((task: GetInterfaceTask) => {
              if (!task.done) {
                return <ContTask
                  key={task._id}
                  id={task._id as string}
                  title={task.title}
                  date={format(getTime(task.createdAt ?? '19/01/1999'), 'dd/MM/yyyy  -  HH:mm a')}
                  colorTag="027ae7"
                  BgColor="bg-amber-100"
                  description={task.description}
                  done={task.done ?? false}
                  tags={task.tags}
                />
              }
            }
            )}
          </ContTasks>

          <ContTasks title="TERMINADAS" icon="ix:certificate-success" color="#00bf02">
            {isLoading && <p>Loading...</p>}
            {isError && tasks?.length === 0 && <p>Error en la peticion</p>}
            {!isLoading && !isError && tasks?.length === 0 && <p className="text-center italic">No hay tareas :)</p>}
            {tasks?.map((task: GetInterfaceTask) => {
              if (task.done) {
                return <ContTask
                  key={task._id}
                  id={task._id as string}
                  title={task.title}
                  date={format(getTime(task.createdAt ?? '19/01/1999'), 'dd/MM/yyyy  -  HH:mm a')}
                  colorTag="027ae7"
                  BgColor="bg-green-100"
                  done={task.done}
                  description={task.description}
                  tags={task.tags}
                />
              }
            }
            )}
          </ContTasks>
        </div>
      </section>
    </>
  );
}

export default Home;