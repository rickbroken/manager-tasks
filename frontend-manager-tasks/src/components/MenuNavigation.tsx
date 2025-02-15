import { Icon } from "@iconify/react/dist/iconify.js";
import BtnNavNavigation from "./nav-navigation/BtnNavNavigation";
import Etiqueta from "./nav-navigation/Etiqueta";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const MenuNavigation = () => {

  const location = useLocation();

  // cuando este en / redireccionar a /home
  useEffect(() => {
    if (location.pathname === '/') {
      window.location.href = '/#/home';
    }
  }, [location.pathname]);

  return (
    <>
      <section className="w-2/12 bg-white h-screen shadow-2xl flex flex-col items-center z-20">
        <div className="flex justify-center items-center flex-col mt-6 mb-10">
          <Icon icon="arcticons:lunatask" width="48" height="48" color="018568" />
          <span className="font-bold text-xl text-gray-700">MANAGER TASKS</span>
          <span>RickBroken</span>
        </div>
        
        <Link to={'/home'} className={"w-full"}>
          <BtnNavNavigation text="Home" icon="fluent:board-28-regular" />
        </Link>

        <Link to={'/emails'} className={"w-full"}>
          <BtnNavNavigation text="Emails" icon="weui:email-outlined" />
        </Link>

        <Link to={'/config'} className={"w-full"}>
          <BtnNavNavigation text="Config" icon="lets-icons:setting-fill" />
        </Link>

        <div className="flex mt-10 mb-2">
          <Icon icon="line-md:filter-twotone" width="28" height="28" color="gray" />
          <span className="font-bold">Etiquetas</span>
        </div>

        <Etiqueta text="Urgente" color="red"/>
        <Etiqueta text="Importante" color="orange"/>
        <Etiqueta text="Pendiente" color="pink"/>

      </section>


    </>
  );
}

export default MenuNavigation;