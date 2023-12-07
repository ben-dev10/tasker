import SpecialNote from "./SpecialNote";
import EditCardModal from "./cgpt/EditCardModal";
import EditableHeading from "./cgpt/EditableHeading";

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
        <h2 className="text-xl font-bold mr-1">Welcome</h2>
        <EditableHeading />
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
