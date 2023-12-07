import { useState } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Todos from "./Todos";
import TaskBar from "./TaskBar";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [specialCard, setSpecialCard] = useState({
    id: "specialCard",
    heading: "Special Card",
    body: `Click the edit icon at the bottom to add a special note. Special Notes are always pinned to the top.`,
  });

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

  const openEditModal = () => {
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setShowEditModal(false);
  };

  const updateSpecialCard = (heading, body) => {
    setSpecialCard({ ...specialCard, heading, body });
    closeEditModal();
  };

  return (
    <>
      <header className="p-3 border-b h-[50px] sticky top-0">
        <div className="wrapper max-w-xl mx-auto">
          <NavBar />
        </div>
      </header>
      <main className="max-w-xl mx-auto h-[calc(100vh-50px)]">
        <div className="wrapper h-full p-3 px-5 pb-0 flex flex-col overflow-hidden">
          <Hero
            openEditModal={openEditModal}
            showEditModal={showEditModal}
            closeEditModal={closeEditModal}
            updateSpecialCard={updateSpecialCard}
            specialCard={specialCard}
          />
          <Todos
            newTodo={newTodo}
            addTodo={addTodo}
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            setNewTodo={setNewTodo}
          />
          <TaskBar todos={todos} />
        </div>
      </main>
    </>
  );
}
