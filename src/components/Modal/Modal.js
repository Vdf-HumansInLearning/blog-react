import React from "react";
import "./Modal.css";

function Modal(props) {
  const modalState = props.modalState;

  if (modalState) {
    return (
      <div id="modal-box" className="modal__overlay">
        <div className="add-modal">
          <div className="modal__content">
            <h2 className="title modal-title">Add/Edit article</h2>
            <div className="inputs__container">
              <input
                type="text"
                className="input margin"
                id="title"
                placeholder="Please enter title"
              ></input>
              <input
                type="text"
                className="input margin"
                id="tag"
                placeholder="Please enter tag"
              ></input>
              <input
                type="text"
                className="input margin"
                id="author"
                placeholder="Please enter author"
              ></input>
              <input
                type="text"
                className="input"
                id="date"
                placeholder="Please enter date"
              ></input>
              <input
                type="text"
                className="input margin"
                id="url"
                placeholder="Please enter image url"
              ></input>
              <input
                type="text"
                className="input"
                id="saying"
                placeholder="Please enter saying"
              ></input>
            </div>
            <textarea
              className="textarea"
              id="textarea"
              name="content"
              cols={28}
              rows={7}
              placeholder="Please enter content"
            ></textarea>
            <div className="modal__buttons">
              <button type="button" className="button close-modal">
                Cancel
              </button>
              <button type="button" className="button button--pink">
                Save
              </button>
            </div>
          </div>
          <div id="error-modal"></div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Modal;
