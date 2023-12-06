import React, { useState } from "react";

const EditCardModal = ({ isOpen, onClose, onSave, heading, body }) => {
  const [editedHeading, setEditedHeading] = useState(heading);
  const [editedBody, setEditedBody] = useState(body);

  const handleSave = () => {
    onSave(editedHeading, editedBody);
  };

  return (
    isOpen && (
      <div>
        <div>
          <label>Heading:</label>
          <input
            type="text"
            value={editedHeading}
            onChange={(e) => setEditedHeading(e.target.value)}
          />
        </div>
        <div>
          <label>Body:</label>
          <textarea
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
          />
        </div>
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    )
  );
};

export default EditCardModal;
