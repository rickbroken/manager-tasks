import { Icon } from "@iconify/react/dist/iconify.js";
import { ContTaskProps } from "./interfaces/home.interface";

const ContTask = ({title, children, date, colorTag, BgColor}: ContTaskProps) => {
  return (
    <>
      <div className={`${BgColor} rounded-2xl px-4 py-2 mb-2`}>
        <div className="flex justify-between gap-2 mt-2">
          <div className="flex items-center">
            <Icon icon="gg:time" width="20" height="20" color="gray" />
            <span className="ml-1 text-sm italic text-gray-500 font-[300]">{date}</span>
          </div>
          <div className="flex gap-2 items-center">
            <Icon className="cursor-pointer" icon="mynaui:tag-plus-solid" color={colorTag} width="30" height="30" />
            <Icon className="cursor-pointer" icon="charm:menu-kebab" width="20" height="20" />
          </div>
        </div>
        <span className="font-bold text-lg ">
          {title}
        </span>
        <p className="font-[300] text-gray-700 mt-4">
          {children}
        </p>
      </div>
    </>
  );
}

export default ContTask;