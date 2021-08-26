import React, { Component } from "react";
import RepositoryRow from "./RepositoryRow";

class ReponsitoryTable extends Component {
  onDelete = (id) => {
    console.log(id);
    this.handleRepositoryChange(id);
  };

  handleRepositoryChange = (newRepository) => {
    this.props.onRepositoryChange(newRepository);
  };
  // findIndex = (repositories, id) => {
  //   var result = -1;
  //   repositories.forEach((repository, index) => {
  //     if (repository.id === id) {
  //       result = index;
  //     }
  //   });
  //   return result;
  // };

  render() {
    const filters = this.props.filters;
    const rows = [];
    var from = (filters.page - 1) * filters.page_size;
    this.props.repositories.forEach((repository, index) => {
      // if (
      //   repository.name.indexOf(searchKeyword) === -1 &&
      //   repository.mobile.indexOf(searchKeyword) === -1
      // ) {
      //   return;
      // }
      rows.push(
        <RepositoryRow
          repository={repository}
          key={index}
          id={from + index}
          onDelete={this.onDelete}
        />
      );
    });

    if (rows.length === 0) {
      rows.push(
        <tr key={""}>
          <td colSpan="7">Không có dữ liệu</td>
        </tr>
      );
    }

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên kho hàng</th>
            <th className="text-center">Số điện thoại</th>
            <th className="text-center">Địa chỉ</th>
            <th className="text-center">Xử lý</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ReponsitoryTable;
