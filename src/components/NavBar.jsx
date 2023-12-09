import menuIcon from "../assets/menu.svg";
import tasker from "../assets/tasker.svg";
import Sheet from "./ui/Sheet";
import ThemeToggle from "./ui/ThemeToggle";

export default function NavBar() {
  function handleBodyStylesAndSheetVisibility() {
    document.getElementById("sheet").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }

  return (
    <div className="navbar flex">
      <div className="mr-auto sm:hidden">
        <svg
          onClick={handleBodyStylesAndSheetVisibility}
          className="dark:stroke-[#A3A3A3] cursor-pointer stroke-black"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
        >
          <defs>
            <path d="M24 0L24 0L24 24L0 24L0 0L24 0Z" id="path_1" />
            <path d="M24 0L24 0L24 24L0 24L0 0L24 0L24 0Z" id="path_2" />
            <clipPath id="clip_1">
              <use xlinkHref="#path_1" clipRule="evenodd" fillRule="evenodd" />
            </clipPath>
            <clipPath id="clip_2">
              <use xlinkHref="#path_2" clipRule="evenodd" fillRule="evenodd" />
            </clipPath>
          </defs>
          <g id="menu" clipPath="url(#clip_1)">
            <path
              d="M24 0L24 0L24 24L0 24L0 0L24 0Z"
              id="menu"
              fill="none"
              stroke="none"
            />
            <g id="Mask-Group">
              <path
                d="M24 0L24 0L24 24L0 24L0 0L24 0L24 0Z"
                id="path_1"
                fill="none"
                fillRule="evenodd"
                stroke="none"
              />
              <g clipPath="url(#clip_2)">
                <g id="menu">
                  <path
                    d="M24 0L24 0L24 24L0 24L0 0L24 0L24 0Z"
                    id="menu#1"
                    fill="none"
                    stroke="none"
                  />
                  <g id="Line" transform="translate(4 11)">
                    <path
                      d="M0 1L9.625 1"
                      id="Line"
                      fill="none"
                      fillRule="evenodd"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g id="Line#1" transform="translate(4 5)">
                    <path
                      d="M0 1L16 1"
                      id="Line"
                      fill="none"
                      fillRule="evenodd"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g id="Line#2" transform="translate(4 17)">
                    <path
                      d="M0 1L13 1"
                      id="Line"
                      fill="none"
                      fillRule="evenodd"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <Sheet />
      <div className="logo">
        <img src={tasker} alt="" className="w-[60px]" />
      </div>
      <div className="ml-2 md:ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
}
