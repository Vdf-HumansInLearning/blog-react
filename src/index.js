import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Details from "./routes/Details/Details";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
