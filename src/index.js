import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./Components/UI/ScrollToTop";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* Upon clicking a job, set the viewport to the top of the page. Without this, the viewport will stay
          where it was prior to visiting the route. 
          Credit: https://stackoverflow.com/a/61602724/13158782
      */}
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
