import { Icon } from "@iconify/react/dist/iconify.js";
import { InterfaceBtnFormNoteProps } from "./interfaces/btn-note.interfaces";

const BtnFormNote = ({ onClick, name, type }: InterfaceBtnFormNoteProps) => {
  return (
    <>
      <button
        type={type === "save" ? "submit" : "button"}
        className={`
            ${type === "save" && "bg-[#00c33d]"}
            ${type === "save" && "hover:bg-[#00af37]"}
            ${type === "save" && "active:bg-[#009f35]"}

            ${type === "cancel" && "bg-[#f72424]"}
            ${type === "cancel" && "hover:bg-[#cd2424]"}
            ${type === "cancel" && "active:bg-[#9c1616]"}
            w-full p-2
            cursor-pointer
            text-white
            transition-all
            duration-300 rounded-lg flex items-center justify-center my-2 gap-2
        `}
        onClick={() => onClick && onClick()}
      >
        <Icon icon={
          type === 'save' ? 'material-symbols-light:save-outline-rounded' :
            type === 'cancel' ? 'ic:outline-cancel' : 'ic:info'
        }
          width="24" height="24" color="white" />
        {name}
      </button>
    </>
  );
}

export default BtnFormNote;