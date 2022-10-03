import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function Formulario() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const makeSubmit = (e) => {
    e.preventDefault();

    createTask(title, description);
  };

  return (
    <div className="text-center">
      <h2 className="text-white font-bold">Ingresa una nueva tarea</h2>
      <form onSubmit={makeSubmit} className="text-white">
        <input
          placeholder="Escribe una tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="bg-transparent border-b-2 mb-3 "
          autoFocus
        />
        <br />
        <textarea
          placeholder="Escribe una descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="bg-transparent border-2 mb-3"
        ></textarea>
        <br />
        <button className="bg-green-600 ml-4 py-1 px-3 rounded-md hover:bg-green-400">
          Guardar Tarea
          </button>
      </form>
    </div>
  );
}
