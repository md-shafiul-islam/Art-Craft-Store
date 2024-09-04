import React from "react";
import { NavLink } from "react-router-dom";
import CategoryLinkItems from "./CategoryLinkItems";

const NavBar = () => {
  return (
    <React.Fragment>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <details>
          <summary>Category</summary>
          <ul className="bg-gray-400 rounded-t-none p-2 z-50 w-auto">
            <CategoryLinkItems />
          </ul>
        </details>
      </li>
      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/art-crafts"> Art & Craft</NavLink>
      </li>

      <li className="text-white font-semibold border-b border-transparent hover:bg-none hover:border-white">
        <NavLink to="/blog">Blog</NavLink>
      </li>
    </React.Fragment>
  );
};

export default NavBar;
