import React from "react";
import "./frontpage.css";
import { json } from "react-router-dom";

function Form(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  function submit() {
    fetch("http://127.0.0.1:8000/note/add/", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, content: content }),
    });
  }

  return (
    <div className={props.visible ? "formPage" : "formPageNone"}>
      <div className="form">
        <div id="close">
          <h1 onClick={props.onClick}>x</h1>
        </div>

        <form className="form">
          <div className="noteTitle">
            <h3>Title</h3>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="textarea">
            <h3>Note</h3>

            <textarea
              name="Note"
              id="note"
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              className="submitButton"
              value="submit"
              onClick={submit}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
