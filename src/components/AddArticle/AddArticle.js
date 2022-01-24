import React from "react";
import "./AddArticle.css";

function AddArticle() {
  return (
    <div id="add-article-button">
      <div className="add__container">
        <button className="button open-modal fas fa-plus">Add Article</button>
      </div>
    </div>
  );
}

export default AddArticle;
