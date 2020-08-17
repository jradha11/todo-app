import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import Close from "@material-ui/icons/Close";
import "./ListItem.css";
import db from "../../firebase";

const ListItem = ({ task, isChecked, id }) => {
  const updateChecked = (e) => {
    e.preventDefault();
    db.collection("todos").doc(id).update({ isChecked: !isChecked });
  };
  return (
    <div className="listitem">
      <Checkbox
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
        checked={isChecked}
        onClick={updateChecked}
      />
      <p className={isChecked ? "list_text_after" : "list_text_before"}>
        {task}
      </p>
      <Close
        onClick={(e) => db.collection("todos").doc(id).delete()}
        className="listitem__closebutton"
      />
    </div>
  );
};
export default ListItem;
