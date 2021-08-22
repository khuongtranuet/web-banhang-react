import React, { Component } from "react";
import RepositoryRow from "./RepositoryRow";

class ReponsitoryTable extends Component {
  render() {
    const searchKeyword = this.props.searchKeyword;
    const rows = [];

    this.props.repositories.forEach((repository) => {
      if (
        repository.name.indexOf(searchKeyword) === -1 &&
        repository.mobile.indexOf(searchKeyword) === -1
      ) {
        return;
      }
      rows.push(
        <RepositoryRow repository={repository} key={repository.name} />
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
