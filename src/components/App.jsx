import { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Todos from "./Todos";
import TaskBar from "./TaskBar";
import { FacebookCard, XCard } from "./ui/Sheet";

// updates theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("theme") || "light";
  document.documentElement.classList.add(savedTheme);
});

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [username, setUsername] = useState("User");
  const [specialCard, setSpecialCard] = useState({
    id: "specialCard",
    heading: "Special Card",
    body: `Click the edit icon at the bottom to add a special note. Special Notes are always pinned to the top.`,
  });

  // Load todos from local storage on component mount
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    const storedSpecialNote =
      JSON.parse(localStorage.getItem("specialNote")) || {};
    const storedUsername =
      JSON.parse(localStorage.getItem("username")) || "User"; // the operand after the operator || is default state

    setTodos(storedTodos);
    setSpecialCard(storedSpecialNote);
    setUsername(storedUsername);
  }, []);

  // Update local storage when todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("specialNote", JSON.stringify(specialCard));
    localStorage.setItem("username", JSON.stringify(username));
  }, [todos, specialCard, username]);

  // Todo actions:
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

  function handleUsernameInput(e) {
    setUsername(e.target.innerText);
  }

  return (
    <>
      <header className="p-3 border-b border-primary h-[50px] sticky top-0">
        <div className="wrapper max-w-xl mx-auto">
          <NavBar />
        </div>
      </header>
      <main className="max-w-xl mx-auto h-[calc(100vh-75px)]">
        <div className="wrapper h-full p-3 px-5 pb-0 gap-5 flex overflow-hidden md:pl-0">
          <div className="sidebar w-[100px] hidden md:flex md:flex-col justify-end pb-2">
            <FacebookCard scale="scale-[.6] translate-y-[15px]" />
            <XCard scale="scale-[.6]" />
          </div>
          <div className="">
            <Hero
              openEditModal={openEditModal}
              showEditModal={showEditModal}
              closeEditModal={closeEditModal}
              updateSpecialCard={updateSpecialCard}
              specialCard={specialCard}
              username={username}
              handleUsernameInput={handleUsernameInput}
            />
            <Todos
              newTodo={newTodo}
              addTodo={addTodo}
              todos={todos}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              setNewTodo={setNewTodo}
            />
          </div>
        </div>
      </main>
      <footer className="h-[25px] bg-black text-white">
        <div className="wrapper max-w-xl mx-auto">
          <TaskBar todos={todos} />
        </div>
      </footer>
    </>
  );
}
