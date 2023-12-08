import { Facebook, Twitter, X } from "lucide-react";

export function FacebookCard({ scale = "" }) {
  return (
    <div className={`relative w-max overflow-hidden ${scale}`} title="Facebook">
      <a href="#" className="">
        <div className="rounded-lg bg-blue-500 dark:bg-blue-600 text-white w-[120px] p-2 aspect-video">
          <p>Facebook</p>
          <Facebook size={70} className="absolute top-0 right-[-22px] " />
        </div>
      </a>
    </div>
  );
}

export function XCard({ scale = "" }) {
  return (
    <div className={`relative w-max overflow-hidden ${scale}`} title="X">
      <a href="#" className="">
        <div className="rounded-lg bg-black text-white w-[120px] p-2 aspect-video">
          <p>Twitter</p>
          <Twitter size={70} className="absolute top-0 right-[-22px] " />
        </div>
      </a>
    </div>
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
      className="absolute top-0 left-0 p-4 w-full h-[100vh] dark:bg-black/90 bg-white/90 hidden backdrop-blur-[10px]"
    >
      <div className="flex mb-2">
        <X
          id="close"
          size={18}
          className="cursor-pointer hover:text-black/50 dark:hover:text-white/50"
          onClick={handleClose}
        />
      </div>

      <div className="mx-auto max-w-[350px]">
        <div className="text-[16px] font-semibold mb-2 dark:text-white/90">Links</div>
        <div className="border mb-4 border-dashed dark:border-primary"></div>
        <div className="flex gap-4">
          <FacebookCard />
          <XCard />
        </div>
      </div>
    </div>
  );
}
