import React, { Component } from "react";
import "./Home.css";
import NavBar from "./components/NavBar/NavBar.js";
import AddArticle from "./components/AddArticle/AddArticle";
import Article from "./components/ArticleComponent/Article";
//import Modal from "./components/Modal/Modal";

const getArticles = (self) => {
  fetch("http://localhost:3007/articles").then(function (response) {
    response
      .json()
      .then(function (res) {
        if (response.status === 200) {
          self.setState({ articles: res });
          console.log(self.state);
        }
      })
      .catch((err) => console.log(err));
  });
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    const self = this;
    getArticles(self);
  }

  render() {
    return (
      <>
        <NavBar />
        <AddArticle />
        {this.state.articles.map((article) => {
          return (
            <Article
              page="home"
              key={article.id}
              id={article.id}
              title={article.title}
              author={article.author}
              date={article.date}
              imgUrl={article.imgUrl}
              imgAlt={article.imgAlt}
              content={article.content}
            ></Article>
          );
        })}
      </>
    );
  }
}

export default Home;
