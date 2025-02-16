import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { parseISO, getTime } from 'date-fns';
import useTaskStore from '../store/tasksStore';
import { createTaskRequest, deleteTaskRequest, getTasksRequest, updateTaskRequest } from '../api/tasks';
import { GetInterfaceTask } from '../api/interfaces/axios.interfaces';
import { useEffect } from 'react';
import { InterfaceCreateTask } from '../components/home-componets/interfaces/home.interface';


export const useTasks = () => {
  const { setTasks } = useTaskStore();
  const queryClient = useQueryClient();

  // Obtener tareas
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasksRequest,
    select: (tasks) => tasks.sort((a, b) => {
      const dateA = getTime(parseISO(a.createdAt ?? '19/01/1999'));
      const dateB = getTime(parseISO(b.createdAt ?? '19/01/1999'));
      return dateB - dateA;
    })
  });

  // Actualizar el estado global de las tareas
  useEffect(() => {
    if (tasks) setTasks(tasks);
  }, [tasks, setTasks]);

  // Eliminar tarea
  const deleteTaskMutation = useMutation({
    mutationFn: deleteTaskRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  });

  // Actualizar tarea
  const updateTaskMutation = useMutation({
    mutationFn: updateTaskRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['tasks'] }),
  });

  // Crear tarea
  const addTaskMutation = useMutation({
    mutationFn: createTaskRequest,
    onSuccess: () => {
      queryClient.invalidateQueries({ exact: true, tasks: {} });
    }
  });

  return {
    tasks: tasks || [],
    isLoading,
    isError,
    deleteTask: (id: string) => deleteTaskMutation.mutateAsync(id),
    updateTask: (task: GetInterfaceTask) => updateTaskMutation.mutateAsync(task),
    addTask: (task: InterfaceCreateTask) => addTaskMutation.mutateAsync(task),
  };
};