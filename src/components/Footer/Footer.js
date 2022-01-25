import React from "react";
import "./Footer.css";

function Footer(props) {
  console.log(props);
  return (
    <div>
      {props.page === "home" ? (
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
      ) : (
      <footer className="footer">
        {props.prevArticle ? (
          <a href={"/" + props.prevArticle}>
            <button className="footer__link">previous article</button>
          </a>
        ) : (
          <div></div>
        )}
        {props.nextArticle ? (
          <a href={"/" + props.nextArticle}>
            <button className="footer__link footer__link--next">next article</button>
          </a>
        ) : (
          null
        )}
      </footer>
      )}
    </div>
  );
}

export default Footer;
