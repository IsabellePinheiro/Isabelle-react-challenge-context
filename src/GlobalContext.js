import React, { Component } from "react";

const GlobalContext = React.createContext();

class GlobalProvider extends Component {
  // Context state
  state = {
    user: {
      firstName: "Isabelle",
      lastName: "Pinheiro",
    },
    showButton: false,
  };

  // Method to update state
  setUser = (user) => {
    this.setState({ user });
  };

  setShowButton = (showButton) => {
    this.setState({ showButton });
  };

  render() {
    const { children } = this.props;
    const { user, showButton } = this.state;
    const { setUser, setShowButton } = this;

    return (
      <GlobalContext.Provider
        value={{
          user,
          setUser,
          showButton,
          setShowButton,
        }}
      >
        {children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContext;

export { GlobalProvider };
