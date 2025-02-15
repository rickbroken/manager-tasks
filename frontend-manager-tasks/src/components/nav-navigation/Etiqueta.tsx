import { Icon } from "@iconify/react/dist/iconify.js";
//import { motion } from "framer-motion";

interface EtiquetaProps {
  text: string;
  color?: string;
}

const Etiqueta = ({ text, color }: EtiquetaProps) => {
  //const [visible, setVisible] = useState(true);

  //if (!visible) return null; // Ocultar si fue soltada


  return (
    <div className="flex my-1 items-center w-9/12 bg-gray-200 py-0.5 rounded-full cursor-grab active:cursor-grabbing">
      <Icon className="ml-2 text-[#a7a7a7]" icon="icon-park-outline:drag" width="20" height="20" />
      <Icon className="ml-6 mr-3" icon="material-symbols-light:label-rounded" width="24" height="24" color={color ?? "018568"} />
      <span className="font-[300] select-none">{text}</span>
    </div>
  );
};

export default Etiqueta;