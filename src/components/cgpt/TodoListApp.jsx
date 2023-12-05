import React, { useState } from "react";
// import TodoList from "./Todos";

// frontend
const AppTodo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="p-4 text-[12px] my-10 bg-green-50 rounded-md border-4 border-green-300/50">
      <h1 className="text-lg font-bold mb-2">Todo App</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        className="border border-green-400 outline-none rounded-md mb-2 mr-2 py-1 px-2"
      />
      <button onClick={addTodo} className="bg-green-500 rounded-md px-3 py-1 text-gray-50">Add Todo</button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

// user added-list
const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className="bg-green-200 p-2 flex items-center gap-1 rounded mb-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="accent-green-500 p-1 rounded w-3"
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            className="text-green-800 font-bold"
          >
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)} className="ml-auto px-2 py-[2px] rounded-md bg-red-400 text-red-50">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default AppTodo;
