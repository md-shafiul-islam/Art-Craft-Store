import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink to="/add-items">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/my-crafts"> My Art & Craft</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>

      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </React.Fragment>
  );
};

export default NavBar;
