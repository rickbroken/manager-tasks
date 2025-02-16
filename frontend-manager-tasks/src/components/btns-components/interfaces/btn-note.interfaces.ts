import { Dispatch, SetStateAction } from "react";
import { GetInterfaceTask } from "../../../api/interfaces/axios.interfaces";

export interface InterfaceBtnNoteProps {
  id: string;
  name: string;
  icon: string;
  colorIcon: string;
  setEditingNote?: Dispatch<SetStateAction<boolean>>;
  setOpenMenu?: Dispatch<SetStateAction<boolean>>;
}

export interface InterfaceBtnFormNoteProps {
  onClick?: () => void;
  name: string;
  type: "save" | "cancel" | "info";
}

export interface InterfaceBtnCompletTaskProps {
  doneTask: boolean;
  valueTaskEdit: GetInterfaceTask;
}

export interface IterfaceTagTask {
  text: string;
  colorTag?: string;
}