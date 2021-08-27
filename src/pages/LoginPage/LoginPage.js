import React, { Component } from "react";
import Login from "../../components/Login/Login";

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
        <Login history={this.props.history} />
      </div>
    );
  }
}

export default LoginPage;
