import { ReactNode } from "react";

export interface ContTaskProps {
  title: string;
  children: ReactNode;
  date: string;
  colorTag: string;
  BgColor: string;
}

export interface ContTasksProps {
  children?: ReactNode;
  title: string;
  icon: string;
  color: string;
}