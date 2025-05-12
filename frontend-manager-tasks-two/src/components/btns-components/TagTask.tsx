import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { IterfaceTagTask } from "./interfaces/btn-note.interfaces";
import { useTasks } from "../../hooks/useTasks";
import Swal from "sweetalert2";

const TagTask = ({ text, colorTag, valueTaskEdit, id }: IterfaceTagTask) => {
  const [deletingTagIcon, setDeletingTagIcon] = useState(false);

  const { updateTask } = useTasks();

  const handleDeleteTag = async () => {
    const rest = await updateTask({
      ...valueTaskEdit,
      tags: valueTaskEdit.tags.filter(tag => tag.id !== id)
    });
    if (rest.status !== 200) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrio un error al intentar agregar la etiqueta',
      });
    }
  }


  return (
    <>
      <span
        className={`relative rounded-sm text-white flex justify-center items-center pr-4 pl-8 py-1 cursor-default`}
        style={{ backgroundColor: colorTag }}
        onMouseEnter={() => setDeletingTagIcon(true)}
        onMouseLeave={() => setDeletingTagIcon(false)}
      >
        {deletingTagIcon &&
          <Icon
            className="absolute left-1 cursor-pointer"
            icon="ic:baseline-close"
            width="24"
            height="24"
            color="white"
            onClick={handleDeleteTag}
          />
        }
        <Icon className={`absolute right-[-38px]`} color={colorTag} icon="mynaui:tag-solid" width="52" height="52" />
        {text}
      </span>
    </>
  );
}

export default TagTask;