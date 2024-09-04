import React from "react";
import { NavLink } from "react-router-dom";

const NavBarLogin = ({ onLogOut, ...props }) => {
  return (
    <React.Fragment>
      <li>
        <NavLink to="/add-items">Add Craft Item</NavLink>
      </li>
      <li>
        <NavLink to="/my-crafts"> My Art & Craft</NavLink>
      </li>
      <li>
        <span onClick={onLogOut}>Logout</span>
      </li>
    </React.Fragment>
  );
};

export default NavBarLogin;
