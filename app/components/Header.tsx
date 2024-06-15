import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <h3 className="logo">Tortar.dev</h3>
        <MenuIcon className="menu" />
      </header>
    </>
  );
};

export default Header;
