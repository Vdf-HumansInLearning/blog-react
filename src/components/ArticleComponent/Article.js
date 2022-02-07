import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

const Article = ({ article, openDeleteModal, editArticle, page }) => {
  let text = article.content;
  let spliced = text.substring(0, text.length / 2);
  let firstParagraph;
  if (
    text.charAt(spliced.length - 1) === "!" ||
    text.charAt(spliced.length - 1) === "." ||
    text.charAt(spliced.length - 1) === "?"
  ) {
    firstParagraph = text.substring(0, text.length / 2);
  } else {
    firstParagraph = text.substring(0, spliced.lastIndexOf(".") + 1);
  }
  let secondParagraph = text.substring(spliced.lastIndexOf(".") + 1);

  return (
    <div id={article.id}>
      <h2 className="title">{article.title}</h2>
      <ul className="info__container">
        <li className="info__item">{article.tag}</li>
        <li className="info__item">
          Added by
          <span className="info__mark point"> {article.author}</span>
        </li>
        <li className="info__item">{article.date}</li>
      </ul>

      <div className="actions__container">
        {page === "home" && (
          <>
            <button
              type="button"
              className="actions__btn border"
              id={article.id}
              onClick={() => editArticle(article.id)}
            >
              Edit
            </button>
            <button
              type="button"
              className="actions__btn"
              id={article.id}
              onClick={() => openDeleteModal(article.id)}
            >
              Delete
            </button>
          </>
        )}
        <img
          src={page === "home" ? article.imgUrl : "../" + article.imgUrl}
          alt={article.imgAlt}
        ></img>
        <div className="content__container">
          {page === "home" ? (
            <p>{article.content}</p>
          ) : (
            <>
              <p>{firstParagraph}</p>
              <p className="saying">{article.saying}</p>
              <p>{secondParagraph}</p>
            </>
          )}
        </div>
        {page === "home" && (
          <div className="readmore__container">
            <Link className="btn-details" to={"/article/" + article.id}>
              <button type="button" className="button button-details">
                Read More
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Article;
