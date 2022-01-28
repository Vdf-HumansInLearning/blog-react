import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    // const modalState = this.props.modalState;
    this.state = {
      title: "",
      imgUrl: "",
      imgAlr: "",
      content: "",
      tag: "",
      author: "",
      date: new Date(),
      saying: "",
      valid: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.isValid = this.isValid.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.isValid();
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  isValid(){
    let {title, imgUrl, content, tag, author, saying } = this.state;
    let regexJpg = /\.(jpe?g|png|gif|bmp)$/i;
    
    (title.length > 4 && title.length < 30
     && regexJpg.test(imgUrl)
     && content.length > 0 && content.length < 3000
     && tag.length > 2 && tag.length < 15
     && author.length > 4 && author.length < 30
     && saying.length < 100) ? this.setState({ valid: false}) : this.setState({ valid: true});
     console.log((title.length > 4 && title.length < 30
      && regexJpg.test(imgUrl)
      && content.length > 0 && content.length < 3000
      && tag.length > 2 && tag.length < 15
      && author.length > 4 && author.length < 30
      && saying.length < 100))
  }

  render() {
    let regexJpg = /\.(jpe?g|png|gif|bmp)$/i;
    return (
      <>
        {this.props.modalState ? (
          <div id="modal-box" className="modal__overlay">
            <div className="add-modal">
              <div className="modal__content">
                <h2 className="title modal-title">Add article</h2>
                <div className="inputs__container">
                  <div>
                    <input
                      type="text"
                      className="input margin"
                      id="title"
                      placeholder="Please enter title"
                      name="title"
                      value={this.state.title}
                      onChange={this.handleChange}
                    ></input>
                    {(this.state.title.length > 4 &&
                    this.state.title.length < 30) || this.state.title === '' ? null : (
                      <p className='error'>Invalid title</p>
                    )}
                  </div>
                  <div>
                  <input
                    type="text"
                    className="input margin"
                    id="tag"
                    placeholder="Please enter tag"
                    name="tag"
                    value={this.state.tag}
                    onChange={this.handleChange}
                  ></input>
                  {(this.state.tag.length > 2 &&
                    this.state.tag.length < 15) || this.state.tag === '' ? null : (
                      <p className='error'>Invalid tag</p>
                    )}
                  </div>
                  <div>
                  <input
                    type="text"
                    className="input margin"
                    id="author"
                    placeholder="Please enter author"
                    name="author"
                    value={this.state.author}
                    onChange={this.handleChange}
                  ></input>
                  {(this.state.author.length > 4 &&
                    this.state.author.length < 30) || this.state.author === '' ? null : (
                      <p className='error'>Invalid author</p>
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
                    value={this.state.date}
                    onChange={this.handleChange}
                  ></input>
  
                  </div>
                  <div>
                  <input
                    type="text"
                    className="input margin"
                    id="url"
                    placeholder="Please enter image url"
                    name="imgUrl"
                    value={this.state.imgUrl}
                    onChange={this.handleChange}
                  ></input>
                    {regexJpg.test(this.state.imgUrl) || this.state.imgUrl === '' ? null : 
                      <p className='error'>Invalid URL</p>
                    }
                  </div>
                  <div>
                  <input
                    type="text"
                    className="input"
                    id="saying"
                    placeholder="Please enter saying"
                    name="saying"
                    value={this.state.saying}
                    onChange={this.handleChange}
                  ></input>
                  {(this.state.saying.length > 4 &&
                    this.state.saying.length < 100) || this.state.saying === '' ? null : (
                      <p className='error'>Invalid saying</p>
                    )}
                  </div>
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
                {(this.state.content.length > 0 &&
                    this.state.content.length < 3000) || this.state.content === '' ? null : (
                      <p className='error'>Invalid content</p>
                    )}
                <div className="modal__buttons">
                  <button
                    type="button"
                    className="button close-modal"
                    onClick={this.props.handleAddClose}
                  >
                    Cancel
                  </button>                  
                  <button
                    type="button"
                    className="button button--pink"
                    disabled = {this.state.valid.toString() ? "true" : "false"}
                    onClick={() => this.props.sendDataArticle(this.state)}
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

export default Modal;
