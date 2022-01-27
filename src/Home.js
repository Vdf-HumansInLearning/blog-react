import React, { Component } from "react";
import "./Home.css";
import NavBar from "./components/NavBar/NavBar.js";
import AddArticle from "./components/AddArticle/AddArticle";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/Footer/Footer";
import EditModal from "./components/EditModal/EditModal";

const getArticles = (self) => {
  fetch("http://localhost:3007/articles?indexStart=0&indexEnd=8").then(
    function (response) {
      response
        .json()
        .then(function (res) {
          if (response.status === 200) {
            self.setState({ articles: res.articlesList });
          }
        })
        .catch((err) => console.log(err));
    }
  );
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selectedArticleToEdit: {},
      showModal: false,
      showEditModal: false
    };
    console.log(this.state);
    this.handleAddClose = this.handleAddClose.bind(this);
    this.handleAddOpen = this.handleAddOpen.bind(this);
    this.handleEditClose = this.handleEditClose.bind(this);
    this.handleEditOpen = this.handleEditOpen.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.sendDataArticle = this.sendDataArticle.bind(this);
    this.sendEditDataArticle = this.sendEditDataArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
  }

  componentDidMount() {
    const self = this;
    getArticles(self);
  }

  //add article
  sendDataArticle(article) {
    this.handleAddClose();
    fetch("http://localhost:3007/articles", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(article),
    }).then((res) => {
      if (res.status === 200) {
        getArticles(this);
      }
    });
  }

  //edit article
  sendEditDataArticle(article) {
    this.handleEditClose();
    fetch("http://localhost:3007/articles/" + article.id, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(article),
    }).then((res) => {
      if (res.status === 200) {
        getArticles(this);
      }
    });
  }

  //delete article
  deleteArticle(id) {
    if (id) {
      fetch("http://localhost:3007/articles/" + id, { method: "DELETE" }).then(
        (res) => {
          if (res.status === 200) {
            getArticles(this);
          }
        }
      );
    }
  }

  //Add article modal close
  handleAddClose() {
    this.setState({
      showModal: false,
    });
  }

  //Add article modal open
  handleAddOpen() {
    this.setState({
      showModal: true,
    });
  }

  //Edit article modal close
  handleEditClose() {
    this.setState({
      showEditModal: false,
    });
  }

  //Edit article modal open
  handleEditOpen() {
    this.setState({
      showEditModal: true,
    });
  }

  //find the article that needs to be updated
  editArticle(id) {
    if (id) {
      this.handleEditOpen();
      this.setState({
        selectedArticleToEdit: this.state.articles.find(item => item.id === id)
      });
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <AddArticle
          sendDataArticle={this.sendDataArticle}
          showModal={this.state.showModal}
          handleAddClose={this.handleAddClose}
          handleAddOpen={this.handleAddOpen}
        />
        {this.state.articles.map((article) => {
          return (
            <Article
              page="home"
              key={article.id}
              id={article.id}
              article={article}
              deleteArticle={this.deleteArticle}
              editArticle={this.editArticle}
              handleEditOpen={this.handleEditOpen}
            ></Article>
          );
        })}
        <Footer page="home" />

        <EditModal 
          sendEditDataArticle={this.sendEditDataArticle}
          showEditModal={this.state.showEditModal}
          handleEditClose={this.handleEditClose}
          article={this.state.selectedArticleToEdit}
          />
      </>
    );
  }
}

export default Home;
