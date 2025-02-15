import { Icon } from "@iconify/react/dist/iconify.js";
import { ContTasksProps } from "./interfaces/home.interface";

const ContTasks = ({children, title, icon, color}: ContTasksProps) => {
  return (
    <>
      <div className="cont-tasks w-4/12 bg-white rounded-xl pt-5 h-[95vh] flex flex-col gap-5 items-center overflow-hidden relative">
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
        />
        }

        <div className="w-full h-full overflow-y-auto px-5 mt-5">
          {children}
        </div>
      </div>
    </>
  );
}

export default ContTasks;