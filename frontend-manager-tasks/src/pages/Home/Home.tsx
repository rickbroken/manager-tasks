import ContTasks from "../../components/home-componets/ContTasks";
import ContTask from "../../components/home-componets/ContTask";
import { GetInterfaceTask } from "../../api/interfaces/axios.interfaces";
import { format, getTime } from "date-fns";
import FormAddTask from "../../components/home-componets/FormAddTask";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";

const Home = () => {
  const [addingNewTask, setAddingNewTask] = useState(false);

  const { tasks, isLoading, isError } = useTasks();

  return (
    <>
      <section className="w-full flex gap-10">
        <ContTasks title="PENDIENTES" icon="lets-icons:subttasks" color="#FFD700" setAddingNewTask={setAddingNewTask}>

          {addingNewTask && <FormAddTask setAddingNewTask={setAddingNewTask} />}

          {isLoading && <p>Loading...</p>}
          {isError && tasks?.length === 0 && <p>Error en la peticion</p>}
          {!isLoading && !isError && tasks.length === 0 && <p className="text-center italic">No hay tareas :)</p>}
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
              />
            }
          }
          )}
        </ContTasks>

        <ContTasks title="TERMINADAS" icon="ix:certificate-success" color="#00bf02">
          {isLoading && <p>Loading...</p>}
          {isError && tasks?.length === 0 && <p>Error en la peticion</p>}
          {!isLoading && !isError && tasks.length === 0 && <p className="text-center italic">No hay tareas :)</p>}
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
              />
            }
          }
          )}
        </ContTasks>
      </section>
    </>
  );
}

export default Home;