import { useState } from "react";
import React from "react";
import Note from "./Note.jsx";

import "./frontpage.css";
//import "./App.css";

function FrontPage() {
  return (
    <div>
      <div id="header">
        <h1 className="title" title="add note">
          Notes
        </h1>
        <button className="button">+</button>
      </div>
      <main className="main">
        <Note />
      </main>
    </div>
  );
}

export default FrontPage;
