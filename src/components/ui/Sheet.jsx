import { X } from "lucide-react";

function Card({ text, bg }) {
  return (
    <a href="" className="">
      <div
        className={`rounded-lg ${bg} text-white w-[120px] p-2 border-2 border-${bg} hover:border-${bg}/50 aspect-video`}
      >
        <p>{text}</p>
      </div>
    </a>
  );
}

export default function Sheet() {
  function handleClose() {
    document.getElementById("sheet").classList.toggle("hidden");
    document.body.classList.toggle("overflow-hidden");
  }
  return (
    <div
      id="sheet"
      className="absolute top-0 left-0 p-4 w-full h-[100vh] bg-white/90 hidden backdrop-blur-[10px]"
    >
      <div onClick={handleClose} className="flex justify-end mb-2">
        <X
          id="close"
          size={18}
          className="cursor-pointer hover:text-black/50"
        />
      </div>

      <div className="mx-auto max-w-[350px] divide-y divide-primary">
        <Card text="twitter" bg="bg-blue-500" />
      </div>
    </div>
  );
}
