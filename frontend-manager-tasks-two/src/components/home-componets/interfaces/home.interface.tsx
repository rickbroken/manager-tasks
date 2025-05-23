import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ContTaskProps {
  id: string;
  title: string;
  description: string;
  author?: string;
  date: string;
  colorTag: string;
  BgColor: string
  done: boolean;
  tags: InterfaceTags[];
}

export interface InterfaceTags {
  id: string;
  name: string;
  colorTag: string;
}

export interface ContTasksProps {
  children?: ReactNode;
  title: string;
  icon: string;
  color: string;
  setAddingNewTask?: Dispatch<SetStateAction<boolean>>;
}

export interface FormAddTaskProps {
  setAddingNewTask: Dispatch<SetStateAction<boolean>>;
}

export interface InterfaceCreateTask {
  title: string;
  description: string;
  author: string;
}

export interface InterfaceEditTask {
  title: string;
  description: string;
  author?: string;
  done?: boolean;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}