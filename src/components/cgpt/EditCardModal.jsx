import React, { useState } from "react";

const EditCardModal = ({ isOpen, onClose, onSave, heading, body }) => {
  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedBody, setEditedBody] = useState(body);

  const handleSave = () => {
    onSave(editedHeading, editedBody);
  };

  return (
    isOpen && (
      <div className="overlay bg-black/50 dark:bg-black/60 absolute grid place-items-center top-0 left-0 w-[100vw] h-[100vh]">
        <div className="modal bg-white dark:bg-[#1c1c1c] md:-translate-y-[150px] absolute shadow-lg dark:shadow-2xl rounded-lg w-[350px]">
          <div className="flex flex-col mb-1 p-5 pb-0">
            <label className="text-[10px] text-blue-800 dark:text-blue-500 font-bold">
              Heading
            </label>
            <input
              type="text"
              value={editedHeading}
              onChange={(e) => setEditedHeading(e.target.value)}
              className="bg-gray-50 rounded px-2 py-1 dark:bg-neutral-700 dark:text-neutral-400/90 dark:outline-neutral-500"
            />
          </div>
          <div className="flex flex-col mb-1 p-5">
            <label className="text-[10px] text-blue-800 dark:text-blue-500 font-bold">
              Body
            </label>
            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              className="bg-gray-50 rounded px-2 pb-5 leading-tight pt-2 dark:bg-neutral-700 dark:text-neutral-400/90 dark:outline-neutral-500"
            />
          </div>
          <div className="rounded-bl-lg rounded-br-lg bg-gray-200/80 dark:bg-black/50 p-5 flex">
            <button
              onClick={handleSave}
              className="ml-auto bg-blue-500 text-white px-3 rounded mr-3 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="text-red-600 hover:text-red-500 dark:text-red-500 dark:hover:text-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditCardModal;
