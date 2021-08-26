import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import ReponsitoryTable from "./ReponsitoryTable";
import CallAPI from "../../../utils/CallAPI";
import Pagination from "../../Pagination";

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
      repositories: [],
      pageOfItems: [],
    };
    this.onChangePage = this.onChangePage.bind(this);
  }
  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }
  componentDidMount() {
    CallAPI("repository/list_repository", "GET", null, null).then((res) => {
      console.log(res);
      if (typeof res != "undefined") {
        this.setState({
          repositories: res.data,
        });
      }
    });
  }

  handleSearchChange = (searchKeyword) => {
    console.log(searchKeyword);
    this.setState({
      searchKeyword: searchKeyword,
    });
  };

  render() {
    return (
      <div>
        <h3 className="col-lg-12 col-sm-12">Danh sách kho hàng</h3>
        <div className="col-lg-12 col-sm-12" style={{ marginTop: "20px" }}>
          <div className="row" style={{ marginBottom: "5px" }}>
            {/* Tìm kiếm theo từ khóa */}
            <div className="col-lg-3 col-sm-3 col-xs-12">
              <Search
                searchKeyword={this.state.searchKeyword}
                onSearchChange={this.handleSearchChange}
              />
            </div>
            {/* Thêm mới */}
            <div
              className="col-lg-2 col-sm-2 col-xs-6"
              style={{ float: "right", textAlign: "right" }}
            >
              <Link to="/admin/repository/add">
                <button className="btn btn-primary">Thêm</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-sm-12">
          <div className="table-responsive">
            <ReponsitoryTable
              // searchKeyword={this.state.searchKeyword}
              repositories={this.state.pageOfItems}
            />
          </div>
        </div>
        <div
          className="col-lg-12 col-sm-12 text-center"
          style={{ marginBottom: "10px" }}
        >
          <Pagination
            items={this.state.repositories}
            onChangePage={this.onChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Repository;
