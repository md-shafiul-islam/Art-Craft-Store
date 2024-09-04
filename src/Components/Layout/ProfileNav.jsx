import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import NavBarLogin from "./NavBarLogin";

const ProfileNav = ({ ...props }) => {
  const { user, logOut } = useContext(AuthContext);

  const onLogOut = () => {
    logOut();
    document.activeElement.blur();
  };

  // console.log("User ", user);

  return (
    <React.Fragment>
      {!user ? (
        <>
          <NavLink className=" text-white font-semibold hover:border-white border-b border-transparent " to="/register">
            Register
          </NavLink>
          <NavLink className=" text-white font-semibold hover:border-white border-b border-transparent " to="/login">
            Login
          </NavLink>
        </>
      ) : (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar z-50"
          >
            <div className="w-10 rounded-full">
              <img alt={user?.displayName} src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            <NavBarLogin onLogOut={onLogOut} />
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProfileNav;
