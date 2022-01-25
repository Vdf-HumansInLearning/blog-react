import "./Home.css";
import NavBar from "./components/NavBar/NavBar.js";
import AddArticle from "./components/AddArticle/AddArticle";
import Article from "./components/ArticleComponent/Article";
//import Modal from "./components/Modal/Modal";

function Home() {
  return (
    <>
      <NavBar />
      <AddArticle />
      <Article page="home" />
    </>
  );
}

export default Home;
