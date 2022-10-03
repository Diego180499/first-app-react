import "../css/taskList.css";
import { TaskCard } from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks, deleteTask } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <h1>No hay tareas</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 m-4">
      {tasks.map((task) => {
        return (
          <div key={task.id} className="bg-gray-800 text-white p-4 rounded-md" >
            <TaskCard task={task} />
            <button
              onClick={() => {
                deleteTask(task.id);
              }}
              className="bg-red-700 px-2 font-bold p-2 rounded-md hover:bg-red-500"
            >
              Eliminar Tarea
            </button>
          </div>
        );
      })}
    </div>
  );
}
