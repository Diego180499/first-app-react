export function TaskCard({ task }) {
  return (
    <div>
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h2 className="text-gray-500 text-sm">{task.description}</h2>
    </div>
  );
}
