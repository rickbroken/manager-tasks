import { Icon } from "@iconify/react/dist/iconify.js";
import BtnNavNavigation from "./nav-navigation/BtnNavNavigation";

const MenuNavigation = () => {
  return (
    <>
      <section className="w-2/12 bg-white h-screen shadow-2xl flex flex-col items-center">
        <div className="flex justify-center items-center flex-col mt-6 mb-10">
          <Icon icon="arcticons:lunatask" width="48" height="48" color="018568" />
          <span className="font-bold text-xl text-gray-700">MANAGER TASKS</span>
          <span>RickBroken</span>
        </div>

        <BtnNavNavigation text="Home" icon="fluent:board-28-regular" />
        <BtnNavNavigation text="Home" icon="fluent:board-28-regular" />
        <BtnNavNavigation text="Home" icon="fluent:board-28-regular" />

        <div className="flex mt-10 mb-2">
        <Icon icon="line-md:filter-twotone" width="28" height="28" color="018568"/>
          <span className="font-bold">Etiquetas</span>
        </div>

        <div className="flex justify-between my-1 items-center w-9/12 bg-gray-200 py-0.5 rounded-full">
          <Icon className="ml-2 text-[#a7a7a7]" icon="icon-park-outline:drag" width="20" height="20"/>
          <div className="flex gap-x-4 mr-8">
            <Icon icon="material-symbols-light:label-rounded" width="24" height="24" color="018568" />
            <span className="font-[300]">Importante</span>
          </div>
        </div>

        <div className="flex justify-between my-1 items-center w-9/12 bg-gray-200 py-0.5 rounded-full">
          <Icon className="ml-2 text-[#a7a7a7]" icon="icon-park-outline:drag" width="20" height="20"/>
          <div className="flex gap-x-4 mr-8">
            <Icon icon="material-symbols-light:label-rounded" width="24" height="24" color="018568" />
            <span className="font-[300]">Csd</span>
          </div>
        </div>
      </section>


    </>
  );
}

export default MenuNavigation;