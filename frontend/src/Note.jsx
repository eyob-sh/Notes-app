import React from "react";
import "./notebox.css";

function Note(props) {
  return (
    <div className="note">
      <div className="top">
        <span style={{ color: "blue" }}>update</span>
        <span style={{ color: "red" }}>delete</span>
      </div>
      <div className="displayedNote">
        <h4 className="noteTitle">{props.title}</h4>
        <p className="noteContent">{props.note}</p>
      </div>
    </div>
  );
}

export default Note;
