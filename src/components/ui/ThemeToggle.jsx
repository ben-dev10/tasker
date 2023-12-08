import { Sun } from "lucide-react";
export default function ThemeToggle() {
  function handleToggleTheme() {
    const currentTheme = document.documentElement.classList.contains("light")
      ? "light"
      : "dark";

    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove(currentTheme);
    document.documentElement.classList.add(newTheme);
  }

  return (
    <div className="ml-auto p-1 rounded-full hover:bg-gray-50 dark:hover:bg-slate-800">
      <Sun size={18} strokeWidth={2} id="toggle" onClick={handleToggleTheme} />
    </div>
  );
}
