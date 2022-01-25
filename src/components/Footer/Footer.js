import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <footer className="footer next-button-class">
        <button
          className="footer__link footer__link--previous"
          id="button-prev"
        >
          previous
        </button>
        <button className="footer__link footer__link--next" id="button-next">
          next
        </button>
      </footer>
    </div>
  );
}

export default Footer;
