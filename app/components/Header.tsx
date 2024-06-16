"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const openNavBar = () => {
    setOpenNav((openNav) => !openNav);
  };

  let toggleClassCheck = openNav ? "active" : "";
  return (
    <>
      <header className="header">
        <h3 className="logo">Tortar.dev</h3>
        <div onClick={openNavBar}>
          <MenuIcon className="menu" />
        </div>
        <ul className={`navbar ${toggleClassCheck}`}>
          <li className="navbarlink">Home</li>
          <li className="navbarlink">Aboutme</li>
          <li className="navbarlink">Projects</li>
          <li className="navbarlink">Contact</li>
        </ul>
      </header>
    </>
  );
};

export default Header;
