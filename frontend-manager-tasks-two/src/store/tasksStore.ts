import {create} from 'zustand';
import { GetInterfaceTask } from '../api/interfaces/axios.interfaces';

interface TaskStore {
  tasks: GetInterfaceTask[];
  setTasks: (tasks: GetInterfaceTask[]) => void;
  search: string;
  setSearch: (search: string) => void;
  selectedTag: string;
  setSelectedTag: (selectedTag: string) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  search: "",
  selectedTag: "",
  setTasks: (tasks) => set({ tasks }),
  setSearch: (search) => set({ search }),
  setSelectedTag: (selectedTag) => set({ selectedTag }),
}));

export default useTaskStore;