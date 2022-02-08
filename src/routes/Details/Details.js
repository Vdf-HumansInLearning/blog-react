import React, { useEffect, useState } from "react";
import "./Details.css";
import NavBar from "../../components/NavBar/NavBar";
import Article from "../../components/ArticleComponent/Article";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";

const Details = (props) => {
  const getArticle = () => {
    fetch("http://localhost:3007/articles/" + props.params.id).then(function (
      response
    ) {
      response
        .json()
        .then(function (res) {
          if (response.status === 200) {
            setArticle(res);
          }
        })
        .catch((err) => console.log(err));
    });
  };

  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticle();
    if (localStorage.getItem("setTheme")) {
      localStorage.getItem("setTheme") === "true"
        ? document.body.setAttribute("data-theme", "light")
        : document.body.setAttribute("data-theme", "dark");
    } else {
      document.body.setAttribute("data-theme", "light");
    }
    window.scrollTo(0, 0);
  }, [props.params.id]);

  if (article) {
    return (
      <>
        <NavBar />
        <Article
          page="details"
          key={article.id}
          id={article.id}
          article={article}
        />
        <Footer
          page="details"
          prevArticle={article.prevId}
          nextArticle={article.nextId}
        />
      </>
    );
  } else {
    return null;
  }
};

//

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  return <WrappedComponent {...props} params={params} />;
};

export default withRouter(Details);
