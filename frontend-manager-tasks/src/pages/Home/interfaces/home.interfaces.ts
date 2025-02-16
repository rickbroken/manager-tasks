import { GetInterfaceTask } from "../../../api/interfaces/axios.interfaces";

export interface useStoreInterface {
  tasks: GetInterfaceTask[];
  isLoading: boolean;
  isError: boolean;
}