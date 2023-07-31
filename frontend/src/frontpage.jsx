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
  const [notes, setNotes] = React.useState([]);

  function handleClick() {
    setVisible((prev) => !prev);
  }
  React.useEffect(() => {
    fetch("http://127.0.0.1:8000/note/get/")
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  console.log(notes);
  const displayNote = notes.map(function (item) {
    return <Note title={item.title} note={item.content} />;
  });
  console.log(displayNote);
  return (
    <div>
      <div id="header">
        <h1 className="title">Notes</h1>

        <button title="add note" className="button" onClick={handleClick}>
          +
        </button>
      </div>
      <main className="main">
        {displayNote}
        <Form visible={visible} onClick={handleClick} />
      </main>
    </div>
  );
}

export default FrontPage;
