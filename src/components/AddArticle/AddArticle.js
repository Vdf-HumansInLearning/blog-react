import React, { Component } from "react";
import Modal from "../Modal/Modal";

import "./AddArticle.css";

class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.handler = this.handler.bind(this);
  }

  handler() {
    this.setState({
      showModal: false,
    });
  }

  render() {
    return (
      <div id="add-article-button">
        <div className="add__container">
          <button
            className="button open-modal fas fa-plus"
            onClick={() => this.setState({ showModal: true })}
          >
            Add Article
          </button>
          <Modal modalState={this.state.showModal} handler={this.handler} />
        </div>
      </div>
    );
  }
}

export default AddArticle;
