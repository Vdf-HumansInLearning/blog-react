import React, { Component } from "react";
import "./Home.css";
import NavBar from "./components/NavBar/NavBar.js";
import AddArticle from "./components/AddArticle/AddArticle";
import Article from "./components/ArticleComponent/Article";
import Footer from "./components/Footer/Footer";
import EditModal from "./components/EditModal/EditModal";
import DarkMode from "./components/DarkMode/DarkMode";
import DeleteModal from "./components/DeleteModal/DeleteModal";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selectedArticleToEdit: {},
      numberOfArticles: 4,
      indexStart : 0,
      indexEnd : 3,
      totalNumberOfArticles : 0,
      showModal: false,
      showEditModal: false,
      theme: false,
      showDeleteModal: false,
      idToDelete: ''
    };
    this.handleAddClose = this.handleAddClose.bind(this);
    this.handleAddOpen = this.handleAddOpen.bind(this);
    this.handleEditClose = this.handleEditClose.bind(this);
    this.handleEditOpen = this.handleEditOpen.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.sendDataArticle = this.sendDataArticle.bind(this);
    this.sendEditDataArticle = this.sendEditDataArticle.bind(this);
    this.editArticle = this.editArticle.bind(this);
    this.updateStartEndIndexes = this.updateStartEndIndexes.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.switchTheme = this.switchTheme.bind(this);
    this.openDeleteModal = this.openDeleteModal.bind(this);
    this.closeDeleteModal = this.closeDeleteModal.bind(this);
  }

  componentDidMount() {
    const self = this;
    this.getArticles(self);
    localStorage.getItem('setTheme') === 'true' ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
  }

  getArticles = (self) => {
    fetch(`http://localhost:3007/articles?indexStart=${this.state.indexStart}&indexEnd=${this.state.indexEnd}`).then(
      function (response) {
        response
          .json()
          .then(function (res) {
            if (response.status === 200) {
              self.setState({ 
                articles: res.articlesList,
                totalNumberOfArticles: res.numberOfArticles
              });
            }
          })
          .catch((err) => console.log(err));
      }
    );
  };

  componentDidUpdate(previousProps, previousState) {
    if (previousState.indexStart !== this.state.indexStart) {
      this.getArticles(this);
    }
    if (previousState.theme !== this.state.theme){
      this.state.theme ? document.body.setAttribute('data-theme', 'dark') : document.body.setAttribute('data-theme', 'light');
    }
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
        this.getArticles(this);
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
        this.getArticles(this);
      }
    });
  }

  //delete article
  deleteArticle(id) {
    if (id) {
      fetch("http://localhost:3007/articles/" + id, { method: "DELETE" }).then(
        (res) => {
          if (res.status === 200) {
            this.getArticles(this);
            this.setState({showDeleteModal: false, idToDelete: ''})
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

  openDeleteModal(id){
    this.setState({showDeleteModal: true, idToDelete: id});
  }

  closeDeleteModal(){
    this.setState({showDeleteModal: false, idToDelete: ''});
  }

  updateStartEndIndexes(button) {
    if (button === 'next') {
        this.setState({
          indexStart: this.state.indexStart + this.state.numberOfArticles,
          indexEnd: this.state.indexEnd + this.state.numberOfArticles
        })
    }

    if (button === 'previous') {
      this.setState({
        indexStart: this.state.indexStart - this.state.numberOfArticles,
        indexEnd: this.state.indexEnd - this.state.numberOfArticles
      })
    }
  }

  handlePrevious() {
    this.updateStartEndIndexes('previous');
  }

  handleNext() {
    console.log("next");
    this.updateStartEndIndexes('next');
  }

  switchTheme = () => {
    this.setState({theme: !this.state.theme});
    localStorage.setItem('setTheme', this.state.theme)
  }
  

  render() {
    return (
      <div>
        <DarkMode switchTheme={this.switchTheme}/>
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
              openDeleteModal={this.openDeleteModal}
            ></Article>
          );
        })}
        <Footer page="home" handleNext={this.handleNext} handlePrevious={this.handlePrevious} indexStart={this.state.indexStart} indexEnd={this.state.indexEnd} totalNumberOfArticles={this.state.totalNumberOfArticles}/>

        <EditModal 
          sendEditDataArticle={this.sendEditDataArticle}
          showEditModal={this.state.showEditModal}
          handleEditClose={this.handleEditClose}
          article={this.state.selectedArticleToEdit}
          />
        <DeleteModal 
          showDeleteModal={this.state.showDeleteModal}
          deleteArticle={this.deleteArticle}
          closeDeleteModal={this.closeDeleteModal}
          idToDelete={this.state.idToDelete}
        />
      </div>
    );
  }
}

export default Home;
