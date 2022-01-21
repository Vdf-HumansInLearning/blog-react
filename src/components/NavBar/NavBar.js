import React from "react";
import "./NavBar.css";

function NavBar() {
  const navbarMenu = ["Travel Updates", "Reviews", "About", "Contact"];
  return (
    <nav className="nav">
      <ul className="nav__container">
        {navbarMenu.map((item, i) => (
          <li key={i} className="nav__item">
            <a href="#" className="nav__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
