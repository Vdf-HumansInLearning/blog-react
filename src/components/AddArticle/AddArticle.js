import React, { Component } from "react";
import Modal from "../Modal/Modal";
import "./AddArticle.css";

class AddArticle extends Component {
  render() {
    return (
      <div id="add-article-button">
        <div className="add__container">
          <button
            className="button open-modal fas fa-plus"
            onClick={this.props.handleAddOpen}
          >
            Add Article
          </button>
          <Modal
            modalState={this.props.showModal}
            handleAddClose={this.props.handleAddClose}
            sendDataArticle={this.props.sendDataArticle}
          />
        </div>
      </div>
    );
  }
}

export default AddArticle;
