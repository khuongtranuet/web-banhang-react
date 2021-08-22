import React, { Component } from "react";

class Search extends Component {
  handleSearchChange = (e) => {
    this.props.onSearchChange(e.target.value);
  };
  render() {
    return (
      <input
        className="form-control"
        type="text"
        name="keyword"
        id="keyword"
        placeholder="Nhập để tìm kiếm"
        value={this.props.searchKeyword}
        onChange={this.handleSearchChange}
      />
    );
  }
}

export default Search;
