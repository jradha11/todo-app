import React from "react";
import "./Header.css";

const Header = () => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  var date = new Date();
  const today = weekday[date.getDay()];
  const today_date =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
  return (
    <div className="header">
      <div>
        <h1>Todo App</h1>
        <h4>
          {today}, {today_date}
        </h4>
      </div>
    </div>
  );
};
export default Header;
