import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { IterfaceTagTask } from "./interfaces/btn-note.interfaces";

const TagTask = ({text}: IterfaceTagTask) => {
  const [deletingTagIcon, setDeletingTagIcon] = useState(false);

  return (
    <>
      <span
        className="relative rounded-sm bg-blue-950 text-white flex justify-center items-center pr-4 pl-8 py-1 cursor-default"
        onMouseEnter={() => setDeletingTagIcon(true)}
        onMouseLeave={() => setDeletingTagIcon(false)}
      >
        {deletingTagIcon &&
          <Icon
            className="absolute left-1 cursor-pointer"
            icon="ic:baseline-close"
            width="24"
            height="24"
            color="white"
          />
        }
        <Icon className="absolute right-[-38px] text-blue-950" icon="mynaui:tag-solid" width="52" height="52" />
        {text}
      </span>
    </>
  );
}

export default TagTask;