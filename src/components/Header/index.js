import React, { Component } from "react";
import { Link } from "@reach/router";
import GlobalContext from "../../GlobalContext";

import logo from "../../assets/icons/logo-jungle.png";
import "./styles.css";

class Header extends Component {
  static contextType = GlobalContext;
  constructor(props) {
    super(props);
    this.handleOnUpdateNewUser = this.handleOnUpdateNewUser.bind(this);
  }

  handleOnUpdateNewUser() {
    this.props.setNewUser();
  }

  render() {
    const { showButton } = this.context;
    return (
      <header>
        {showButton ? (
          <>
            <img src={logo} alt="logo" />
            <Link to="/user">
              <button
                className="cancel"
                onClick={() => {
                  this.context.setShowButton(false);
                }}
              >
                Cancel
              </button>
            </Link>
            <button
              className="save"
              disabled={!this.props.enableSaveButton}
              onClick={this.handleOnUpdateNewUser}
            >
              Save changes
            </button>
          </>
        ) : (
          <img src={logo} alt="logo" />
        )}
      </header>
    );
  }
}

export default Header;
