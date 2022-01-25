import React, { Component } from "react";
import "./Article.css";

class Article extends Component {
  constructor(props) {
    super(props);
    const page = props.page;
    console.log(page);
  }

  render() {
    return (
      <div id={this.props.id}>
        <h2 className="title">{this.props.title}</h2>
        <ul className="info__container">
          <li className="info__item">Destination Europe</li>
          <li className="info__item">
            Added by
            <span className="info__mark point">{this.props.author}</span>
          </li>
          <li className="info__item">{this.props.date}</li>
        </ul>
        <div className="actions__container">
          <button
            type="button"
            className="actions__btn border"
            id={this.props.id}
          >
            Edit
          </button>
          <button type="button" className="actions__btn" id={this.props.id}>
            Delete
          </button>
          <img src={this.props.imgUrl} alt={this.props.imgAlt}></img>
          <div className="content__container">
            <p>{this.props.content}</p>
          </div>
          <div className="readmore__container">
            <a className="btn-details" href={"/article/" + this.props.id}>
              <button type="button" className="button button-details">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
