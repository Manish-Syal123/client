import React from "react";
import "./headerstyle.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="headercontainer">
      <h3>Mern Blog App</h3>
      <ul className="navlist">
        <Link to={"/"}>
          <li className="navitem">Home</li>
        </Link>
        <Link to={"/add-blog"}>
          <li className="navitem">Add Blog</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
