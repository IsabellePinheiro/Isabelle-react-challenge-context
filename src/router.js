import React from "react";
import { Router as ReachRouter } from "@reach/router";
import App from "views/app";
import User from "./views/User";
import UpdateUser from "./views/UpdateUser";

const Router = () => (
  <ReachRouter>
    <App path="/">
      <User path="/user" />
      <UpdateUser path="/update-user" />
    </App>
  </ReachRouter>
);

export default Router;
