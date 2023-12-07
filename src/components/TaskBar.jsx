export default function TaskBar({ todos }) {
  return (
    <div className="taskbar  px-2 flex items-center">
      Tasks count: {todos.length}
    </div>
  );
}
