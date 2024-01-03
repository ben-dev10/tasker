import "../styles/scrollbar.css";

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="border border-blue-100 dark:border-slate-500/50 p-2 px-3 flex items-center gap-1 rounded-md mb-2"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="p-1 bg-red-500"
          />
          <span
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
            className="text-blue-900 dark:text-gray-400"
          >
            {todo.text}
          </span>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="ml-auto px-2 py-[2px] rounded-md bg-red-400 dark:bg-red-500 text-red-50"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

// Todos (parent) receives 5 props and passes 3 to TodoList component (child)
export default function Todos({
  newTodo,
  addTodo,
  todos,
  toggleTodo,
  deleteTodo,
  setNewTodo,
}) {
  return (
    <div className="todolist">
      <h6 className="text-[14px] text-secondary dark:text-white/[.9] font-bold mb-2">
        Tasks
      </h6>
      <div className="flex gap-3 mb-1 h-[30px]">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="px-2 py-1 rounded-md outline-none border-2 border-blue-400 focus:ring-2 focus:ring-blue-500/30
           dark:bg-transparent dark:placeholder:text-gray-500 dark:border-blue-500 dark:focus:ring-blue-400/50"
          placeholder="Add a new task"
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 dark:bg-blue-600 rounded-[5px] px-3 text-blue-50"
        >
          Add todo
        </button>
      </div>
      {/* <div className="border-b border-blue-800 shadow-lg h-4"></div> */}
      <div
        className={
          todos.length > 0
            ? `border-b border-blue-800 dark:border-blue-500 shadow-lg h-4`
            : ""
        }
      ></div>
      <div className="taskslist max-h-[340px] overflow-y-auto pt-3 pb-[70px]">
        <TodoList
          todos={todos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  );
}
