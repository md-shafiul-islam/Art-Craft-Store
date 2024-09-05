import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer  p-10 bg-gray-800 text-white">
      <aside>
        <span className="text-2xl">
          <i className="fa-brands fa-firstdraft"></i>
        </span>
        <p className="w-1/2 sm:w-full xs:w-full">
          <span className="py-2 text-lg font-bold"> Ayat Art & Craft Ltd.</span>
          <br />
          Ayat Craft
        </p>
      </aside>
      <nav className="xs:w-full sm:w-full  flex xs:flex-col sm:flex-col justify-center items-center">
        <h6 className="footer-title">Menu</h6>
        <NavLink to={"/"} className="link link-hover">
          Home
        </NavLink>
        <NavLink to={"/art-crafts"} className="link link-hover">
          Art & Craft
        </NavLink>
        <NavLink to={"/contact-us"} className="link link-hover">
          Contact Us
        </NavLink>
        <NavLink to="/register" className="link link-hover">
          Register
        </NavLink>
        <NavLink to="/login" className="link link-hover">
          Login
        </NavLink>
      </nav>

      <nav className="xs:w-full sm:w-full  flex xs:flex-col sm:flex-col justify-center items-center">
        <h6 className="footer-title">Legal</h6>
        <NavLink className="link link-hover">Terms of use</NavLink>
        <NavLink className="link link-hover">Privacy policy</NavLink>
        <NavLink className="link link-hover">Cookie policy</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
