import React, { useState, useEffect } from "react";

const EditModal = ({
  article,
  showEditModal,
  handleEditClose,
  sendEditDataArticle,
}) => {
  console.log(article);
  const [id, setId] = useState(article.id);
  const [title, setTitle] = useState(article.title);
  const [imgUrl, setImgUrl] = useState(article.imgUrl);
  const [imgAlt, setImgAlt] = useState(article.imgAlr);
  const [content, setContent] = useState(article.content);
  const [tag, setTag] = useState(article.tag);
  const [author, setAuthor] = useState(article.author);
  const [date, setDate] = useState(article.date);
  const [saying, setSaying] = useState(article.saying);
  const [valid, setValid] = useState(false);

  const articleToSend = {
    id: id,
    title: title,
    imgUrl: imgUrl,
    imgAlr: imgAlt,
    content: content,
    tag: tag,
    author: author,
    date: date,
    saying: saying,
    valid: valid,
  };

  useEffect(() => {
    setId(article.id);
    setTitle(article.title);
    setImgUrl(article.imgUrl);
    setImgAlt(article.imgAlr);
    setContent(article.content);
    setTag(article.tag);
    setAuthor(article.author);
    setDate(article.date);
    setSaying(article.saying);
  }, [article]);

  function isValid() {
    let regexJpg = /\.(jpe?g|png|gif|bmp)$/i;
    title.length > 4 &&
    title.length < 100 &&
    regexJpg.test(imgUrl) &&
    content.length > 30 &&
    content.length < 3000 &&
    tag.length > 2 &&
    tag.length < 50 &&
    author.length > 4 &&
    author.length < 30 &&
    saying.length < 100
      ? setValid(false)
      : setValid(true);
  }

  let regexJpg = /\.(jpe?g|png|gif|bmp)$/i;

  return (
    <>
      {showEditModal ? (
        <div id="modal-box" className="modal__overlay">
          <div className="add-modal">
            <div className="modal__content">
              <h2 className="title modal-title">Edit article</h2>
              <div className="inputs__container">
                <div>
                  <input
                    type="text"
                    className="input margin"
                    id="title"
                    placeholder="Please enter title"
                    name="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                      isValid();
                    }}
                  ></input>
                  {(title.length > 4 && title.length < 100) ||
                  title === "" ? null : (
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
                    value={tag}
                    onChange={(e) => {
                      setTag(e.target.value);
                      isValid();
                    }}
                  ></input>
                  {(tag.length > 2 && tag.length < 50) || tag === "" ? null : (
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
                    value={author}
                    onChange={(e) => {
                      setAuthor(e.target.value);
                      isValid();
                    }}
                  ></input>
                  {(author.length > 4 && author.length < 30) ||
                  author === "" ? null : (
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
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      isValid();
                    }}
                  ></input>
                </div>
                <div>
                  <input
                    type="text"
                    className="input margin"
                    id="url"
                    placeholder="Please enter image url"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={(e) => {
                      setImgUrl(e.target.value);
                      isValid();
                    }}
                  ></input>
                  {regexJpg.test(imgUrl) || imgUrl === "" ? null : (
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
                    value={saying}
                    onChange={(e) => {
                      setSaying(e.target.value);
                      isValid();
                    }}
                  ></input>
                  {(saying.length > 4 && saying.length < 100) ||
                  saying === "" ? null : (
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
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                    isValid();
                  }}
                ></textarea>
                {(content.length > 30 && content.length < 3000) ||
                content === "" ? null : (
                  <p className="error">Invalid content</p>
                )}
              </div>

              <div className="modal__buttons">
                <button
                  type="button"
                  className="button close-modal"
                  onClick={handleEditClose}
                >
                  Cancel
                </button>
                {valid ? (
                  <button
                    type="button"
                    className="button button--disabled"
                    disabled
                    onClick={() => sendEditDataArticle(articleToSend)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="button button--pink"
                    onClick={() => sendEditDataArticle(articleToSend)}
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
