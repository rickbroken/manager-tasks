import { Icon } from "@iconify/react/dist/iconify.js";
import { InterfaceBtnMenuAddTagsProps } from "./interfaces/btn-note.interfaces";
import { useTasks } from "../../hooks/useTasks";
import Swal from "sweetalert2";

const BtnMenuAddTags = ({ name, colorIcon, valueTaskEdit, setOpenAddTags, id }: InterfaceBtnMenuAddTagsProps) => {

  const { updateTask } = useTasks();

  const handleUpdateTask = async () => {
    // Validamos si la etiqueta ya existe
    const tagExist = valueTaskEdit.tags.find(tag => tag.id === id);
    if (tagExist) {
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
        icon: "info",
        title: "La etiqueta ya existe en la tarea"
      });

      setOpenAddTags(false);
      return;
    }

    const rest = await updateTask({
      ...valueTaskEdit, tags: [
        ...valueTaskEdit.tags,
        { name: name, colorTag: colorIcon, id: id }
      ]
    });
    if (rest.status === 200) {
      setOpenAddTags(false);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrio un error al intentar agregar la etiqueta',
      });
    }
  }

  return (
    <>
      <div
        className="flex items-center gap-2 py-2 px-5 rounded-lg hover:bg-gray-100 cursor-pointer w-full"
        onClick={handleUpdateTask}
      >
        <Icon icon="mynaui:tag-solid" width="20" height="20" color={colorIcon} />
        <span>{name}</span>
      </div>
    </>
  );
}

export default BtnMenuAddTags;