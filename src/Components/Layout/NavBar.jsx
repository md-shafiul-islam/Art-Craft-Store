import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/crafts">Crafts</NavLink>
      </li>

      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </React.Fragment>
  );
};

export default NavBar;
