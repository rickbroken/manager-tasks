import { Icon } from "@iconify/react/dist/iconify.js";
import { useTasks } from "../../hooks/useTasks";
import Swal from "sweetalert2";
import { InterfaceBtnNoteProps } from "./interfaces/btn-note.interfaces";

const BtnMenuNote = ({ name, icon, colorIcon, id, setEditingNote, setOpenMenu }: InterfaceBtnNoteProps) => {

  const { deleteTask } = useTasks();

  const handleOnClick = () => {
    if (name === 'Eliminar') {
      Swal.fire({
        title: "Seguro de eliminar la tarea",
        showCancelButton: true,
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#d33",
        icon: "question",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deleteTask(id);
          if(res.status === 200) {
            Swal.fire({
              title: "Tarea eliminada",
              icon: "success",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    } else if (name === 'Editar') {
      if (setEditingNote) {
        setEditingNote(true);
        if (setOpenMenu) setOpenMenu(false);
      }
    }
  }

  return (
    <>
      <div
        className="flex items-center gap-2 py-2 px-5 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
        onClick={handleOnClick}
      >
        <Icon icon={icon} width="20" height="20" color={colorIcon} />
        <span>{name}</span>
      </div>
    </>
  );
}

export default BtnMenuNote;