import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import Note from "./Note.jsx";
import Form from "./form.jsx";

import "./frontpage.css";
import { Link } from "react-router-dom";
//import "./App.css";

function FrontPage() {
  const [visible, setVisible] = React.useState(false);

  function handleClick() {
    setVisible((prev) => !prev);
  }
  return (
    <div>
      <div id="header">
        <h1 className="title" title="add note">
          Notes
        </h1>

        <button className="button" onClick={handleClick}>
          +
        </button>
      </div>
      <main className="main">
        <Note />
        <Form visible={visible} onClick={handleClick} />
      </main>
    </div>
  );
}

export default FrontPage;
