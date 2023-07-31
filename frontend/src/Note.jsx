import React from "react";
import "./notebox.css";

function Note(props) {
  return (
    <div className="note">
      <div className="top">
        <span style={{ color: "blue", cursor: "pointer" }}>update</span>
        <span style={{ color: "red", cursor: "pointer" }} onClick={props.del}>
          delete
        </span>
      </div>
      <div className="displayedNote">
        <h4 className="noteTitle">{props.title}</h4>
        <p className="noteContent">{props.note}</p>
      </div>
    </div>
  );
}

export default Note;
