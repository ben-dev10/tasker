import menuIcon from "../assets/menu.svg";
import tasker from "../assets/tasker.svg";
import Sheet from "./ui/Sheet";

export default function NavBar() {
  function handleBodyStylesAndSheetVisibility() {
    document.getElementById("sheet").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <div className="navbar flex">
      <div className="mr-auto sm:hidden">
        <img
          src={menuIcon}
          alt="menu-icon"
          className=""
          onClick={handleBodyStylesAndSheetVisibility}
        />
      </div>
      <Sheet />
      <div className="logo">
        <img src={tasker} alt="" className="w-[60px]" />
      </div>
    </div>
  );
}
