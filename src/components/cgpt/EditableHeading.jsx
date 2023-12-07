import { PencilIcon, Save } from "lucide-react";
import React, { useState } from "react";

const EditableHeading = () => {
  const [isEditing, setEditing] = useState(false);
  const [heading, setHeading] = useState("User");

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Perform any save logic, like updating a database, if needed.
  };

  const handleInputChange = (e) => {
    setHeading(e.target.innerText);
  };

  return (
    <div>
      {isEditing ? (
        <div className="flex ">
          <h1
            contentEditable
            onBlur={handleSave}
            onInput={handleInputChange}
            style={{ borderBottom: "1px dashed #000", display: "inline-block" }}
            className="text-xl font-bold"
          >
            {heading}
          </h1>
          <Save
            size={14}
            onClick={handleSave}
            className="self-end mb-1 ml-3 cursor-pointer"
          />
        </div>
      ) : (
        <div className="flex">
          <h1 className="text-xl font-bold">{heading}</h1>
          <PencilIcon
            onClick={handleEditClick}
            size={14}
            className="self-end mb-1 ml-3 cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default EditableHeading;
