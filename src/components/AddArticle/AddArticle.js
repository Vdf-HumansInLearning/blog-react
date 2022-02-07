import React from "react";
import Modal from "../Modal/Modal";
import "./AddArticle.css";

const AddArticle = ({
  showModal,
  handleAddClose,
  handleAddOpen,
  sendDataArticle,
  refreshInputs,
}) => {
  return (
    <div id="add-article-button">
      <div className="add__container">
        <button
          className="button open-modal fas fa-plus"
          onClick={handleAddOpen}
        >
          Add Article
        </button>
        <Modal
          modalState={showModal}
          handleAddClose={handleAddClose}
          sendDataArticle={sendDataArticle}
          refreshInputs={refreshInputs}
        />
      </div>
    </div>
  );
};

export default AddArticle;
