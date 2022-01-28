import React from "react";
import "./Footer.css";

function Footer(props) {
  console.log(props);
  return (
    <div>
      {props.page === "home" ? (
        <footer className="footer next-button-class">
          {props.indexStart === 0 ? (
            <div></div>
          ) : (
            <button
              className="footer__link footer__link--previous"
              id="button-prev"
              onClick={props.handlePrevious}
            >
              previous
            </button>
          )}
          {props.indexEnd < props.totalNumberOfArticles - 1 && (
            <button
              className="footer__link footer__link--next"
              id="button-next"
              onClick={props.handleNext}
            >
              next
            </button>
          )}
        </footer>
      ) : (
        <footer className="footer">
          {props.prevArticle ? (
            <a href={"/article/" + props.prevArticle}>
              <button className="footer__link">previous article</button>
            </a>
          ) : (
            <div></div>
          )}
          {props.nextArticle ? (
            <a href={"/article/" + props.nextArticle}>
              <button className="footer__link footer__link--next">
                next article
              </button>
            </a>
          ) : null}
        </footer>
      )}
    </div>
  );
}

export default Footer;
