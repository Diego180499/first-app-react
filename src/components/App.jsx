import { TaskList } from "./TaskList";
import { Formulario } from "./Form";

export function App() {
  return (
    <main className="bg-zinc-700 h-screen p-3">
      <div>
        <h1 className="text-white text-center font-extrabold">Lista de Tareas:</h1>
        <Formulario />
        <TaskList />
      </div>
    </main>
  );
}

/*
 useEffect(() => {
    setTasks(data);
  }, []);
*/
//const [tasks, setTasks] = useState([]);

/*
  useEffect(()=>{
    setTasks(data);
  },[]);

  function createTask(taskTitle, taskDescription){
    setTasks([...tasks,{
      id:tasks.length,
      title:taskTitle,
      description:taskDescription
    }]);

  }

  function deleteTask(id){
    setTasks(tasks.filter( task => task.id != id));
    
  }
  */
