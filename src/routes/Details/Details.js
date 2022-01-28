import React, { Component } from "react";
import "./Details.css";
import NavBar from "../../components/NavBar/NavBar";
import Article from "../../components/ArticleComponent/Article";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const getArticle = (self) => {
  const { id } = self.props.params;

  fetch("http://localhost:3007/articles/" + id).then(function (response) {
    response
      .json()
      .then(function (res) {
        if (response.status === 200) {
          self.setState({ article: res });
        }
      })
      .catch((err) => console.log(err));
  });
};

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      article: null,
    };
  }

  componentDidMount() {
    const self = this;
    getArticle(self);
    localStorage.getItem('setTheme') ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
  }

  render() {
    if (this.state.article) {
      return (
        <>
          <NavBar />
          <Article
            page="details"
            key={this.state.article.id}
            id={this.state.article.id}
            article={this.state.article}
          />
          <Footer
            page="details"
            prevArticle={this.state.article.prevId}
            nextArticle={this.state.article.nextId}
          />
        </>
      );
    } else {
      return null;
    }
  }
}

//

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

export default withRouter(Details);
