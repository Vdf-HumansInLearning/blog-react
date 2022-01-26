import React, { Component } from "react";
import "./Home.css";
import NavBar from "./components/NavBar/NavBar.js";
import AddArticle from "./components/AddArticle/AddArticle";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/Footer/Footer";
//import Modal from "./components/Modal/Modal";

const getArticles = (self) => {
  fetch("http://localhost:3007/articles?indexStart=0&indexEnd=8").then(
    function (response) {
      response
        .json()
        .then(function (res) {
          if (response.status === 200) {
            self.setState({ articles: res.articlesList });
            console.log(self.state);
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
      showModal: false,
    };
    console.log(this.state);
    this.handler = this.handler.bind(this);
    this.handlerClose = this.handlerClose.bind(this);
  }

  componentDidMount() {
    const self = this;
    getArticles(self);
  }

  sendDataArticle(article) {
    this.handler();
    fetch("http://localhost:3007/articles", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(article),
    }).then((res) => console.log(res));
  }

  handler() {
    this.setState({
      showModal: false,
    });
  }

  handlerClose() {
    this.setState({
      showModal: true,
    });
  }

  render() {
    return (
      <>
        <NavBar />
        <AddArticle
          sendDataArticle={this.sendDataArticle}
          showModal={this.state.showModal}
          handler={this.handler}
          handlerClose={this.handlerClose}
        />
        {this.state.articles.map((article) => {
          return (
            <Article
              page="home"
              key={article.id}
              id={article.id}
              article={article}
            ></Article>
          );
        })}
        <Footer page="home" />
      </>
    );
  }
}

export default Home;
