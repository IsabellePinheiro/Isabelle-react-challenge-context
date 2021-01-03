import React, { Fragment, Component } from "react";
import { navigate } from "@reach/router";

import Header from "../../components/Header";
import GlobalContext from "../../GlobalContext";
import "./styles.css";

class UserUpdate extends Component {
  static contextType = GlobalContext;

  constructor(props) {
    super(props);
    this.setNewUser = this.setNewUser.bind(this);
  }

  componentDidMount() {
    this.context.setShowButton(true);
  }

  setNewUser() {
    this.context.setUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    });
    this.context.setShowButton(false);
    navigate("/user");
  }

  render() {
    const enableSaveButton = !!this.state?.firstName && !!this.state?.lastName;
    return (
      <Fragment>
        <Header
          setNewUser={this.setNewUser}
          enableSaveButton={enableSaveButton}
        />
        <div className="container-info">
          <h1>Edit profile</h1>
          <input
            type="text"
            className="first-name"
            placeholder="First name"
            onChange={(e) => this.setState({ firstName: e.target.value })}
          />
          <input
            type="text"
            className="last-name"
            placeholder="Last name"
            onChange={(e) => this.setState({ lastName: e.target.value })}
          />
        </div>
      </Fragment>
    );
  }
}

export default UserUpdate;
