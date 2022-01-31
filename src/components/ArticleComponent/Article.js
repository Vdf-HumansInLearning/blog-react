import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Article.css";

class Article extends Component {
  render() {
    let text = this.props.article.content;
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
      <div id={this.props.article.id}>
        <h2 className="title">{this.props.article.title}</h2>
        <ul className="info__container">
          <li className="info__item">{this.props.article.tag}</li>
          <li className="info__item">
            Added by
            <span className="info__mark point">
              {" "}
              {this.props.article.author}
            </span>
          </li>
          <li className="info__item">{this.props.article.date}</li>
        </ul>

        <div className="actions__container">
          {this.props.page === "home" && (
            <>
              <button
                type="button"
                className="actions__btn border"
                id={this.props.article.id}
                onClick={() => this.props.editArticle(this.props.article.id)}
              >
                Edit
              </button>
              <button
                type="button"
                className="actions__btn"
                id={this.props.article.id}
                onClick={() => this.props.openDeleteModal(this.props.article.id)}
              >
                Delete
              </button>
            </>
          )}
          <img
            src={
              this.props.page === "home"
                ? this.props.article.imgUrl
                : "../" + this.props.article.imgUrl
            }
            alt={this.props.article.imgAlt}
          ></img>
          <div className="content__container">
            {this.props.page === "home" ? (
              <p>{this.props.article.content}</p>
            ) : (
              <>
                <p>{firstParagraph}</p>
                <p className="saying">{this.props.article.saying}</p>
                <p>{secondParagraph}</p>
              </>
            )}
          </div>
          {this.props.page === "home" && (
            <div className="readmore__container">
              <Link
                className="btn-details"
                to={"/article/" + this.props.article.id}
              >
                <button type="button" className="button button-details">
                  Read More
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Article;
