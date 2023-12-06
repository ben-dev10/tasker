export default function TaskBar({ todos }) {
  return (
    <div className="taskbar bg-black text-white h-[30px] px-2 flex items-center">
      Tasks count: {todos.length}
    </div>
  );
}
