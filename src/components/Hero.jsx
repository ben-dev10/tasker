import SpecialNote from "./SpecialNote";
import EditCardModal from "./cgpt/EditCardModal";
import { PencilIcon } from "lucide-react";
// import EditableHeading from "./cgpt/EditableHeading";

export default function Hero({
  openEditModal,
  showEditModal,
  closeEditModal,
  updateSpecialCard,
  specialCard,
}) {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  return (
    <div className="mt-3">
      <div className="flex">
        <h2 className="text-xl font-bold mr-1 flex">
          Welcome
          <span
            className="border-b border-dashed border-blue-400 ml-1 h-max"
            contentEditable="true"
            title="Username editable"
          >
            User
          </span>
          <PencilIcon size={14} className="self-end mb-1 ml-3 text-gray-500" />
        </h2>
        {/* <EditableHeading /> */}
      </div>
      {/* <h2 className="text-xl font-bold">Welcome</h2> */}
      <div className="text-gray-500">{day + "th " + "Dec" + ", " + year}</div>
      <div className="mt-2 mb-5">
        <EditCardModal
          isOpen={showEditModal}
          onClose={closeEditModal}
          onSave={updateSpecialCard}
          heading={specialCard.heading}
          body={specialCard.body}
        />
        <SpecialNote openEditModal={openEditModal} specialCard={specialCard} />
      </div>
    </div>
  );
}
