import { Icon } from "@iconify/react/dist/iconify.js";
import { ContTasksProps } from "./interfaces/home.interface";

const ContTasks = ({children, title, icon, color, setAddingNewTask }: ContTasksProps) => {
  return (
    <>
      <div className="cont-tasks w-6/12 bg-white rounded-xl pt-5 h-[95vh] flex flex-col gap-5 items-center  relative">
        <div className="flex gap-2 items-center">
          <Icon icon={icon} color={color} width="24" height="24" />
          <p>{title}</p>
        </div>

        {title === "PENDIENTES" && 
          <Icon className="
          absolute
          top-4
          right-5
          cursor-pointer
          text-[#02b745]
          hover:text-[#028c35]
          active:text-[#026426]
          active:transition-none
          transition-all
          duration-300"
          icon="zondicons:add-outline"
          width="32"
          height="32"
          onClick={() => setAddingNewTask && setAddingNewTask(true) }
        />
        }

        <div className="w-full h-full  px-5 mt-5 overflow-y-auto pb-10">
          {children}
        </div>
      </div>
    </>
  );
}

export default ContTasks;