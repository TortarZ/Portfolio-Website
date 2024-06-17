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
        <nav className="navbar-pc">
          <a className="link" href="#Home">
            Home
          </a>
          <a className="link" href="#About">
            About
          </a>
          <a className="link" href="#Project">
            Projects
          </a>
          <a className="link" href="#Contact">
            Contact
          </a>
        </nav>
        <nav className={`navbar ${toggleClassCheck}`}>
          <a className="navbarlink" href="#Home" onClick={openNavBar}>
            Home
          </a>
          <a className="navbarlink" href="#About" onClick={openNavBar}>
            About
          </a>
          <a className="navbarlink" href="#Project" onClick={openNavBar}>
            Projects
          </a>
          <a className="navbarlink" href="#Contact" onClick={openNavBar}>
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Header;
