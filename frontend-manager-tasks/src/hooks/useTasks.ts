import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { parseISO, getTime } from "date-fns";
import { useEffect } from "react";
import useTaskStore from "../store/tasksStore";
import { createTaskRequest, deleteTaskRequest, getTasksRequest, updateTaskRequest } from "../api/tasks";
import { GetInterfaceTask } from "../api/interfaces/axios.interfaces";
import { InterfaceCreateTask } from "../components/home-componets/interfaces/home.interface";

export const useTasks = () => {
  const { setTasks, search, setSearch, selectedTag, setSelectedTag } = useTaskStore();
  const queryClient = useQueryClient();

  // Obtener tareas
  const { data: tasks, isLoading, isError } = useQuery({
    queryKey: ["tasks", search, selectedTag], // ⚡ Dependencias del filtro
    queryFn: getTasksRequest,
    select: (tasks) =>
      tasks
        .filter((task) => {
          const matchesSearch = search
            ? task.title.toLowerCase().includes(search.toLowerCase()) ||
              task.description.toLowerCase().includes(search.toLowerCase())
            : true;

          const matchesTag = selectedTag
            ? task.tags.some((tag) => tag.name.toLowerCase() === selectedTag.toLowerCase())
            : true;

          return matchesSearch && matchesTag;
        })
        .sort((a, b) => {
          const dateA = getTime(parseISO(a.createdAt ?? "1999-01-19"));
          const dateB = getTime(parseISO(b.createdAt ?? "1999-01-19"));
          return dateB - dateA;
        }),
  });

  // Actualizar el estado global de tareas
  useEffect(() => {
    if (tasks) setTasks(tasks);
  }, [tasks, setTasks]);

  // Mutations
  const deleteTaskMutation = useMutation({
    mutationFn: deleteTaskRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const updateTaskMutation = useMutation({
    mutationFn: updateTaskRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const addTaskMutation = useMutation({
    mutationFn: createTaskRequest,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  return {
    tasks,
    isLoading,
    isError,
    search,
    setSearch,
    selectedTag,
    setSelectedTag,
    deleteTask: (id: string) => deleteTaskMutation.mutateAsync(id),
    updateTask: (task: GetInterfaceTask) => updateTaskMutation.mutateAsync(task),
    addTask: (task: InterfaceCreateTask) => addTaskMutation.mutateAsync(task),
  };
};
