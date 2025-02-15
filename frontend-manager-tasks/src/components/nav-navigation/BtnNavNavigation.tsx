import { Icon } from "@iconify/react/dist/iconify.js";
import { InterfaceBtnNav } from "./interfaces/interface-btn-nav";
import { useLocation } from "react-router-dom";

const BtnNavNavigation = ({text, icon}: InterfaceBtnNav) => {

  const location = useLocation();
  
  return (
    <>
      <div className={`
        flex 
        justify-center
        items-center
        w-full
        my-1
        py-2
        hover:bg-sky-50
        active:bg-sky-200
        gap-x-3
        cursor-pointer
        transition-all
        duration-300
        ${location.pathname === '/' + text.toLocaleLowerCase() ? 'bg-sky-200' : ''}`}
        >
        <Icon icon={icon} width="28" height="28" style={{ color: '#018568' }} />
        <span className="font-[500] text-gray-700 select-none">{text}</span>
      </div>
    </>
  );
}

export default BtnNavNavigation;