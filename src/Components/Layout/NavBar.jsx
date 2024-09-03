import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <React.Fragment>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/categories"> Category</NavLink>
      </li>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/products"> Art & Craft</NavLink>
      </li>

      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </React.Fragment>
  );
};

export default NavBar;
