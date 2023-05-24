import React from "react";
import "./navbar.scss";

function Navbar(props) {
  return (
    <div className="navbar">
      <span className="logo">Khanh</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEFhaeN8z2QT5IhANAUK60o9IBXdBlWcV6ww&usqp=CAU"
            alt=""
            className="avatar"
          />
        </li>
        <li className="listItem">Khanh Duy</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
}

export default Navbar;
