export default function TaskBar({ todos }) {
  const completedTodos = todos.filter((todo) => todo.completed).length;
  return (
    <div className="taskbar  px-2 flex items-center">
      <p>
        Tasks count: <span className="text-gray-400">{todos.length}</span>
      </p>
      <p className="ml-2">
        Completed: <span className="text-gray-400">{completedTodos}</span>
      </p>
    </div>
  );
}
