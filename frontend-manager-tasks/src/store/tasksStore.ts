import {create} from 'zustand';
import { GetInterfaceTask } from '../api/interfaces/axios.interfaces';

interface TaskStore {
  tasks: GetInterfaceTask[];
  setTasks: (tasks: GetInterfaceTask[]) => void;
}

const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
}));

export default useTaskStore;