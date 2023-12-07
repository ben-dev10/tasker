import { PenBox } from "lucide-react";

export default function SpecialNote({ openEditModal, specialCard }) {
  return (
    <div className="p-3 flex flex-col px-4 rounded-lg shadow-lg gap-4 min-h-[120px] bg-blue-500 w-full">
      <div className="flex gap-4">
        <div className="icon-box p-2 bg-white/[.12] rounded-lg h-max">
          <PenBox className="text-white" />
        </div>
        <div className="text">
          <h4 className="text-white text-[16px] font-bold pb-1">
            {specialCard.heading}
          </h4>
          <p className="leading-tight text-white/[.7]">{specialCard.body}</p>
        </div>
      </div>
      <div className="self-end mt-auto">
        <button className="">
          <PenBox size={14} className="text-white" onClick={openEditModal} />
        </button>
      </div>
    </div>
  );
}
