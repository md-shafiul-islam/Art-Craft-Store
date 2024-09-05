import React, { useContext, useEffect, useState } from "react";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import NavBarLogin from "./NavBarLogin";
import { Tooltip } from "react-tooltip";

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
          <NavLink
            className=" text-white font-semibold hover:border-white border-b border-transparent "
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className=" text-white font-semibold hover:border-white border-b border-transparent "
            to="/login"
          >
            Login
          </NavLink>
        </>
      ) : (
        <div className="flex flex-row justify-center items-center gap-4">
          <div className="w-10 h-10 rounded-full">
            <img alt={user?.displayName} src={user?.photoURL} id="userName" className="rounded-full" />
            <Tooltip anchorSelect="#userName" content={user?.displayName} />
          </div>
          <NavBarLogin onLogOut={onLogOut} />
        </div>
      )}
    </React.Fragment>
  );
};

export default ProfileNav;
