import React, { Component, Fragment } from "react";
import { Link } from "@reach/router";
import GlobalContext from "../../GlobalContext";
import Header from "../../components/Header";
import iconProfile from "../../assets/icons/ic_profile.png";
import "./styles.css";

class User extends Component {
  static contextType = GlobalContext;

  render() {
    const { user } = this.context;
    return (
      <Fragment>
        <Header />
        <section className="profile">
          <img className="icon-profile" src={iconProfile} alt="icon-profile" />
          <h1>
            {user.firstName} {user.lastName}
          </h1>
          <Link className="edit-link" to="/update-user">
            Edit
          </Link>
        </section>
      </Fragment>
    );
  }
}

export default User;
