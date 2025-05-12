import { Icon } from "@iconify/react/dist/iconify.js";
import { InterfaceBtnCompletTaskProps } from "./interfaces/btn-note.interfaces";
import { useTasks } from "../../hooks/useTasks";
import Swal from "sweetalert2";

const BtnCompletTask = ({ doneTask, valueTaskEdit }: InterfaceBtnCompletTaskProps) => {

  const { updateTask } = useTasks();

  const handleCompleteTask = async () => {
    const rest = await updateTask({ ...valueTaskEdit, done: !doneTask });
    if (rest.status === 200) {
      const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: !doneTask ? "success" : "info",
        title: !doneTask ? "Tarea completada" : "Tarea no completada"
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrio un error al actualizar la tarea',
      });
    }
  }

  return (
    <>
      <div className={`
            flex
            gap-1
            items-center
            px-2
            py-1
            rounded-lg
            cursor-pointer
            ${doneTask ? "bg-red-200" : "bg-green-200"}
            ${doneTask ? "hover:bg-red-300" : "hover:bg-green-300"}
          `}
        onClick={handleCompleteTask}
      >
        <Icon
          icon={`${doneTask ? "solar:undo-left-broken" : "icon-park-outline:success"}`}
          width="30"
          height="30"
          color={`${doneTask ? "d60014" : "026426"}`}
        />
        <span className={`${doneTask ? "text-[#dd051a]" : "text-[#026426]"}`}>{doneTask ? "No completada" : "Completada"}</span>
      </div>
    </>
  );
}

export default BtnCompletTask;