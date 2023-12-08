import React, { useState, useRef, useEffect } from "react";

const EditableHeadingRef = () => {
  const [isEditing, setEditing] = useState(false);
  const [heading, setHeading] = useState("Editable Heading");
  const headingRef = useRef();

  useEffect(() => {
    if (isEditing) {
      headingRef.current.focus();
      // Place the cursor at the end of the text
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(headingRef.current);
      range.collapse(false);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [isEditing]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    // Perform any save logic, like updating a database, if needed.
  };

  const handleInputChange = () => {
    setHeading(headingRef.current.innerText);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <h1
            ref={headingRef}
            contentEditable
            onBlur={handleSave}
            onInput={handleInputChange}
            style={{ borderBottom: "1px dashed #000", display: "inline-block" }}
          >
            {heading}
          </h1>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h1>{heading}</h1>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default EditableHeadingRef;
