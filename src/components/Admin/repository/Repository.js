import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import ReponsitoryTable from "./ReponsitoryTable";

class Repository extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyword: "",
    };
  }

  handleSearchChange = (searchKeyword) => {
    // console.log(searchKeyword);
    this.setState({
      searchKeyword: searchKeyword,
    });
  };

  //   handleSearchChange(searchKeyword) {
  //     this.setState({
  //       searchKeyword: searchKeyword,
  //     });
  //   }
  render() {
    const repositories = [
      {
        name: "Kho hàng Mỹ Đình",
        mobile: "0223568741",
        address:
          "50 Đường Mỹ Đình, Phường Mỹ Đình 2, Quận Nam Từ Liêm, Thành phố Hà Nội",
      },
      {
        name: "Kho hàng Cầu Giấy",
        mobile: "0223846514",
        address:
          "100 Đường Quan Hoa, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội",
      },
    ];
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
              searchKeyword={this.state.searchKeyword}
              repositories={repositories}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Repository;
