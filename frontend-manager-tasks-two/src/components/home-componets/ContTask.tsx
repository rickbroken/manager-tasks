import { Icon } from "@iconify/react/dist/iconify.js";
import { ContTaskProps, InterfaceTags } from "./interfaces/home.interface";
import { useEffect, useState } from "react";
import BtnMenuNote from "../btns-components/BtnMenuNote";
import BtnFormNote from "../btns-components/BtnFormNote";
import { useTasks } from "../../hooks/useTasks";
import { GetInterfaceTask } from "../../api/interfaces/axios.interfaces";
import Swal from "sweetalert2";
import BtnCompletTask from "../btns-components/BtnCompletTask";
import TagTask from "../btns-components/TagTask";
import BtnMenuAddTags from "../btns-components/BtnMenuAddTags";
import { listTagsDefault } from "./lib/listTagas";

const ContTask = ({ title, description, date, colorTag, BgColor, id, done: doneTask, tags }: ContTaskProps) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [hiddenBtnDone, setHiddenBtnDone] = useState(true);
  const [openAddTags, setOpenAddTags] = useState(false);
  const [editingNote, setEditingNote] = useState(false);

  const [valueTaskEdit, setValueTaskEdit] = useState<GetInterfaceTask>(Object);

  const { updateTask } = useTasks();

  useEffect(() => {
    setValueTaskEdit({ title: title, description: description, _id: id, tags: tags });
  }, [title, description, id, tags]);

  const handleUpdateTask = async () => {
    const rest = await updateTask(valueTaskEdit);
    if (rest.status === 200) {
      setEditingNote(false);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrio un error al actualizar la tarea',
      });
    }
  }

  const handleCancelEdit = () => {
    setEditingNote(false);
    setValueTaskEdit({
      title: title,
      description: description,
      _id: id,
      tags: tags,
    });
  }

  return (
    <>
      <div
        className={`${BgColor} rounded-2xl px-4 py-2 mb-3 relative`}
        onMouseEnter={() => setHiddenBtnDone(false)}
        onMouseLeave={() => setHiddenBtnDone(true)}
      >

        {openMenu || openAddTags &&
          <div className="fixed top-0 left-0 w-full h-full bg-opacity-50 z-20" onClick={() => {
            setOpenMenu(false);
            setOpenAddTags(false);
          }}></div>
        }

        {openMenu === true &&
          <div className="absolute top-10 right-8 bg-white rounded-lg shadow-md z-30">
            <BtnMenuNote name="Eliminar" colorIcon="red" icon="fluent:delete-48-regular" id={id} />
            <BtnMenuNote
              name="Editar"
              colorIcon="blue"
              icon="lucide:edit"
              id={id}
              setEditingNote={setEditingNote}
              setOpenMenu={setOpenMenu}
            />
          </div>
        }

        {openAddTags === true &&
          <div className="absolute top-14 right-20 bg-white rounded-lg shadow-md z-30">
            {listTagsDefault.map((tag: InterfaceTags) => (
              <BtnMenuAddTags
                key={tag.id}
                id={tag.id}
                name={tag.name}
                colorIcon={tag.colorTag}
                valueTaskEdit={valueTaskEdit}
                setOpenAddTags={setOpenAddTags}
              />
            ))
            }
          </div>
        }

        <div className="flex justify-between gap-2 mt-2">
          <div className="flex items-center">
            <Icon icon="gg:time" width="20" height="20" color="gray" />
            <span className="ml-1 text-sm italic text-gray-500 font-[300]">{date}</span>
          </div>

          <div className="flex gap-2 gap-x-4 items-center">
            {!hiddenBtnDone &&
              <BtnCompletTask doneTask={doneTask} valueTaskEdit={valueTaskEdit} />
            }

            <Icon
              className="cursor-pointer my-1"
              icon="mdi:tag-plus-outline"
              color={colorTag}
              width="30"
              height="30"
              onClick={() => setOpenAddTags(!openAddTags)}
            />

            <Icon
              className="cursor-pointer"
              icon="charm:menu-kebab"
              width="20"
              height="20"
              onClick={() => setOpenMenu(!openMenu)}
            />
          </div>
        </div>

        <div className="w-full flex gap-2 gap-x-12 mb-5 flex-wrap mt-2">
          {tags?.map((tag: InterfaceTags) => (
            <TagTask key={tag.id} text={tag.name} colorTag={tag.colorTag} id={tag.id} valueTaskEdit={valueTaskEdit} />
          ))
          }
        </div>

        {editingNote ?
          <input
            type="text"
            className="w-full mt-2 border-b-2 border-gray-400 focus:outline-none mb-2"
            placeholder="Editar titulo"
            value={valueTaskEdit.title ?? ''}
            onChange={(e) => setValueTaskEdit({ ...valueTaskEdit, title: e.target.value })}
          />
          :
          <span className="font-[500] text-xl">
            {title}
          </span>
        }


        {editingNote ?
          <textarea
            className="w-full mt-2 border-2 focus:outline-none bg-amber-50 min-h-20 px-3 py-2 border-none"
            placeholder="Editar descripción"
            value={valueTaskEdit.description ?? ''}
            onChange={(e) => setValueTaskEdit({ ...valueTaskEdit, description: e.target.value })}
          />
          :
          <p className="font-[300] text-gray-800 text-lg mt-4 pb-4">
            {description}
          </p>
        }

        {editingNote &&
          <>
            <BtnFormNote
              name="Guardar"
              type="save"
              onClick={() => handleUpdateTask()}
            />

            <BtnFormNote
              name="Cancelar"
              type="cancel"
              onClick={() => handleCancelEdit()}
            />
          </>
        }
      </div>
    </>
  );
}

export default ContTask;