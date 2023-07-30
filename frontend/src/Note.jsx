import React from "react";
import "./notebox.css";

export default function Note() {
  return (
    <div className="note">
      <div className="top">
        <span style={{ color: "blue" }}>update</span>
        <span style={{ color: "red" }}>delete</span>
      </div>
    </div>
  );
}
