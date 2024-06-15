import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="navbar">
          <h3 className="logo">Tortar.dev</h3>
          <MenuIcon className="menu" />
        </nav>
      </header>
    </>
  );
};

export default Header;
