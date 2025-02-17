import axios, { AxiosResponse } from "axios";
import { GetInterfaceTask, TaskApiResponse } from "./interfaces/axios.interfaces";
import { InterfaceCreateTask } from "../components/home-componets/interfaces/home.interface";

const API = import.meta.env.VITE_DEV === 'true' ? import.meta.env.VITE_URL_API_DEV : import.meta.env.VITE_URL_API_PROD;

const taskApi = axios.create({
  baseURL: API,
  headers: {
    'Content-Type': 'application/json'
  }
});


export const createTaskRequest = (task: InterfaceCreateTask): Promise<AxiosResponse<TaskApiResponse>> => {
  return taskApi.post(`${API}/tasks`, task);
};

export const getTasksRequest = (): Promise<GetInterfaceTask[]> => {
  return taskApi.get(`${API}/tasks`).then(res => res.data);
}

export const deleteTaskRequest = (id: string): Promise<AxiosResponse<TaskApiResponse>> => {
  return taskApi.delete(`${API}/tasks/${id}`);
}

export const updateTaskRequest = (task: GetInterfaceTask): Promise<AxiosResponse<TaskApiResponse>> => {
  return taskApi.put(`${API}/tasks/${task._id}`, task);
}