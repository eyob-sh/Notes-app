import React from "react";
import "./frontpage.css";

function Form(props) {
  // const [visibility, setVisibility] = React.useState(props.visible);
  // console.log(props.visible);

  return (
    <div className={props.visible ? "formPage" : "formPageNone"}>
      <div className="form">
        <div id="close">
          <h1 onClick={props.onClick}>x</h1>
        </div>

        <form className="form">
          <div className="noteTitle">
            <h3>Title</h3>
            <input type="text" name="title" id="title" />
          </div>
          <div className="textarea">
            <h3>Note</h3>

            <textarea name="Note" id="note"></textarea>
          </div>
          <div>
            <input type="submit" className="submitButton" />
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
