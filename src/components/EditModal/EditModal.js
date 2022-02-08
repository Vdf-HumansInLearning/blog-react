import React, { useState, useEffect } from "react";

const EditModal = (props) => {
  const [valid, setValid] = useState(false);
  const [articleE,setArticleE] = useState(null);
  
  useEffect(() => {
    setArticleE(props.article);
  },[props]);

  function isValid() {
    let regexJpg = /\.(jpe?g|png|gif|bmp)$/i;
    articleE.title.length > 4 &&
    articleE.title.length < 100 &&
    regexJpg.test(articleE.imgUrl) &&
    articleE.content.length > 30 &&
    articleE.content.length < 3000 &&
    articleE.tag.length > 2 &&
    articleE.tag.length < 50 &&
    articleE.author.length > 4 &&
    articleE.author.length < 30 &&
    articleE.saying.length < 100
      ? setValid(false)
      : setValid(true);
  }

  const handleChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setArticleE(prevArticle => {
      return { 
        ...prevArticle, 
        [name] : value 
      }
    })
    isValid();
  }

  let regexJpg = /\.(jpe?g|png|gif|bmp)$/i;
  return (
    <>
      {props.showEditModal && articleE ? (
        <div id="modal-box" className="modal__overlay">
          <div className="add-modal">
            <div className="modal__content">
              <h2 className="title modal-title">Edit articleE</h2>
              <div className="inputs__container">
                <div>
                  <input
                    type="text"
                    className="input margin"
                    id="title"
                    placeholder="Please enter title"
                    name="title"
                    value={articleE.title}
                    onChange={handleChange}
                  ></input>
                  {(articleE.title.length > 4 && articleE.title.length < 100) ||
                  articleE.title === "" ? null : (
                    <p className="error">Invalid title</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className="input margin"
                    id="tag"
                    placeholder="Please enter tag"
                    name="tag"
                    value={articleE.tag}
                    onChange={handleChange}
                  ></input>
                  {(articleE.tag.length > 2 && articleE.tag.length < 50) || articleE.tag === "" ? null : (
                    <p className="error">Invalid tag</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className="input margin"
                    id="author"
                    placeholder="Please enter author"
                    name="author"
                    value={articleE.author}
                    onChange={handleChange}
                  ></input>
                  {(articleE.author.length > 4 && articleE.author.length < 30) ||
                  articleE.author === "" ? null : (
                    <p className="error">Invalid author</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className="input"
                    id="date"
                    placeholder="Please enter date"
                    name="date"
                    disabled
                    value={articleE.date}
                    onChange={handleChange}
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    className="input margin"
                    id="url"
                    placeholder="Please enter image url"
                    name="imgUrl"
                    value={articleE.imgUrl}
                    onChange={handleChange}
                  ></input>
                  {regexJpg.test(articleE.imgUrl) || articleE.imgUrl === "" ? null : (
                    <p className="error">Invalid URL</p>
                  )}
                </div>
                <div>
                  <input
                    type="text"
                    className="input"
                    id="saying"
                    placeholder="Please enter saying"
                    name="saying"
                    value={articleE.saying}
                    onChange={handleChange}
                  ></input>
                  {(articleE.saying.length > 4 && articleE.saying.length < 100) ||
                  articleE.saying === "" ? null : (
                    <p className="error">Invalid saying</p>
                  )}
                </div>
              </div>
              <div className="textarea">
                <textarea
                  className="textarea"
                  id="textarea"
                  name="content"
                  cols={28}
                  rows={7}
                  placeholder="Please enter content"
                  value={articleE.content}
                  onChange={handleChange}
                ></textarea>
                {(articleE.content.length > 30 && articleE.content.length < 3000) ||
                articleE.content === "" ? null : (
                  <p className="error">Invalid content</p>
                )}
              </div>

              <div className="modal__buttons">
                <button
                  type="button"
                  className="button close-modal"
                  onClick={props.handleEditClose}
                >
                  Cancel
                </button>
                {valid ? (
                  <button
                    type="button"
                    className="button button--disabled"
                    disabled
                    onClick={() => props.sendEditDataArticle(articleE)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button button--pink"
                    onClick={() => props.sendEditDataArticle(articleE)}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
            <div id="error-modal"></div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default EditModal;
