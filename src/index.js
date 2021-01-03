import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Router } from "@reach/router";
import { GlobalProvider } from "./GlobalContext.js";
import Header from "./components/Header";
import User from "./views/User";
import UserUpdate from "./views/UserUpdate";

ReactDOM.render(
  <GlobalProvider>
    <Router>
      <Header exact path="/" />
      <User path="/user" />
      <UserUpdate path="/update-user" />
    </Router>
  </GlobalProvider>,
  document.getElementById("root")
);
