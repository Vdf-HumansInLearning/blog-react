import React, { Component } from "react";
import "./EditModal.css";

class EditModal extends Component {
  constructor(props) {
    super(props);
    // const modalState = this.props.modalState;
    this.state = {
      id: "",
      title: "",
      imgUrl: "",
      imgAlr: "",
      content: "",
      tag: "",
      author: "",
      date: "",
      saying: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.article && this.props.article !== prevProps.article) {
       this.setState({
        id: this.props.article.id,
        title: this.props.article.title,
        imgUrl: this.props.article.imgUrl,
        imgAlr: this.props.article.imgAlr,
        content: this.props.article.content,
        tag: this.props.article.tag,
        author: this.props.article.author,
        date: this.props.article.date,
        saying: this.props.article.saying,
       });
    }
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    return (
      <>
        {this.props.showEditModal ? (
          <div id="modal-box" className="modal__overlay">
            <div className="add-modal">
              <div className="modal__content">
                <h2 className="title modal-title">Edit article</h2>
                <div className="inputs__container">
                  <input
                    type="text"
                    className="input margin"
                    id="title"
                    placeholder="Please enter title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    className="input margin"
                    id="tag"
                    placeholder="Please enter tag"
                    name="tag"
                    value={this.state.tag}
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    className="input margin"
                    id="author"
                    placeholder="Please enter author"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    className="input"
                    id="date"
                    placeholder="Please enter date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    className="input margin"
                    id="url"
                    placeholder="Please enter image url"
                    name="imgUrl"
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                  ></input>
                  <input
                    type="text"
                    className="input"
                    id="saying"
                    placeholder="Please enter saying"
                    name="saying"
                    value={this.state.saying}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <textarea
                  className="textarea"
                  id="textarea"
                  name="content"
                  cols={28}
                  rows={7}
                  placeholder="Please enter content"
                  value={this.state.content}
                  onChange={this.handleChange}
                ></textarea>
                <div className="modal__buttons">
                  <button
                    type="button"
                    className="button close-modal"
                    onClick={this.props.handleEditClose}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="button button--pink"
                    onClick={() => this.props.sendEditDataArticle(this.state)}
                  >
                    Save
                  </button>
                </div>
              </div>
              <div id="error-modal"></div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default EditModal;
