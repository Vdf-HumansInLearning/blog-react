import React, { Component } from "react";
import Modal from "../Modal/Modal";
import "./AddArticle.css";

const changeModalState = () => {
  this.setState({ showModal: true });
};
class AddArticle extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
  }

  render() {
    return (
      <div id="add-article-button">
        <div className="add__container">
          <button
            className="button open-modal fas fa-plus"
            onClick={() => changeModalState}
          >
            Add Article
          </button>
          <Modal modalState={this.state.showModal} />
        </div>
      </div>
    );
  }
}

export default AddArticle;
