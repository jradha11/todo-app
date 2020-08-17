import React from "react";
import ListItem from "../ListItem/ListItem";

import "./List.css";
const List = (props) => {
  return (
    <div className="list">
      {props.todos.map((todo) => (
        <ListItem task={todo.task} isChecked={todo.isChecked} id={todo.id} />
      ))}
    </div>
  );
};
export default List;
