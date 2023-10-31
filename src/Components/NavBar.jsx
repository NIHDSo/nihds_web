import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/nav_logo.png";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className={`nav_bar ${isMobileMenuOpen ? "mobile" : ""}`}>
        <Link to="/">
          <img className="nav_logo" src={Logo} alt="Logo" />
        </Link>
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`} />
          <div className={`bar ${isMobileMenuOpen ? "open" : ""}`} />
        </div>
        <ul className={`desktop-menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="/">FAQ</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
