import React from "react";
import "./Modal.css";

function Modal(props) {
  const modalState = props.modalState;

  let textInputTitle = React.createRef();
  let textInputTag = React.createRef();
  let textInputAuthor = React.createRef();
  let textInputDate = React.createRef();
  let textInputImgUrl = React.createRef();
  let textInputSaying = React.createRef();
  let textInputContent = React.createRef();
  //let textInputImgAlt = React.createRef();

  function sendDataArticle(e) {
    props.handler();
    let objTosend = {
      title: textInputTitle.current.value,
      imgUrl: textInputImgUrl.current.value,
      imgAlr: "photo",
      content: textInputContent.current.value,
      tag: textInputTag.current.value,
      author: textInputAuthor.current.value,
      date: textInputDate.current.value,
      saying: textInputSaying.current.value,
    };
    console.log(objTosend);

    fetch("http://localhost:3007/articles", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(objTosend),
    }).then((res) => console.log(res));
  }

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
                ref={textInputTitle}
              ></input>
              <input
                type="text"
                className="input margin"
                id="tag"
                placeholder="Please enter tag"
                ref={textInputTag}
              ></input>
              <input
                type="text"
                className="input margin"
                id="author"
                placeholder="Please enter author"
                ref={textInputAuthor}
              ></input>
              <input
                type="text"
                className="input"
                id="date"
                placeholder="Please enter date"
                ref={textInputDate}
              ></input>
              <input
                type="text"
                className="input margin"
                id="url"
                placeholder="Please enter image url"
                ref={textInputImgUrl}
              ></input>
              <input
                type="text"
                className="input"
                id="saying"
                placeholder="Please enter saying"
                ref={textInputSaying}
              ></input>
            </div>
            <textarea
              className="textarea"
              id="textarea"
              name="content"
              cols={28}
              rows={7}
              placeholder="Please enter content"
              ref={textInputContent}
            ></textarea>
            <div className="modal__buttons">
              <button
                type="button"
                className="button close-modal"
                onClick={props.handler}
              >
                Cancel
              </button>
              <button
                type="button"
                className="button button--pink"
                onClick={() => sendDataArticle()}
              >
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
