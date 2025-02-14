import { Icon } from "@iconify/react/dist/iconify.js";
import { InterfaceBtnNav } from "./interfaces/interface-btn-nav";

const BtnNavNavigation = ({text, icon}: InterfaceBtnNav) => {
  return (
    <>
      <div className="
        flex 
        justify-center
        items-center
        w-full
        my-1
        py-2
        hover:bg-sky-50
        gap-x-3
        cursor-pointer
        transition-all
        duration-300
        ">
        <Icon icon={icon} width="28" height="28" style={{ color: '#018568' }} />
        <span className="font-[500] text-gray-700">{text}</span>
      </div>
    </>
  );
}

export default BtnNavNavigation;