import React from "react";
import "./frontpage.css";
import { json } from "react-router-dom";

function Form(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  //const [id, setId] = React.useState(props.id);
  const [upd, setUpd] = React.useState(props.upd);

  function updateForm(id, title, content) {
    //setUpd(true);
    fetch(`http://127.0.0.1:8000/note/update/${id}/`, {
      method: "PUT",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({ title: title, content: content }),
    });
    // .then(() => {
    //   setUpd(false);
    // });
  }

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
              defaultValue={props.form.title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="textarea">
            <h3>Note</h3>

            <textarea
              name="Note"
              id="note"
              defaultValue={props.form.content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              className="submitButton"
              Value="submit"
              onClick={() =>
                upd ? updateForm(props.id, title, content) : submit()
              }
            />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
