import React, { Component } from "react";
import RepositoryAdd from "../../../components/Admin/repository/RepositoryAdd";

class RepositoryAddPage extends Component {
  render() {
    return (
      <div>
        <RepositoryAdd history={this.props.history} />
      </div>
    );
  }
}

export default RepositoryAddPage;
