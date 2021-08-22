import React, { Component } from "react";

class RepositoryRow extends Component {
  render() {
    const repository = this.props.repository;

    return (
      <tr>
        <td className="text-center">1</td>
        <td>{repository.name}</td>
        <td>{repository.mobile}</td>
        <td>{repository.address}</td>
        <td className="text-center " style={{ width: "110px" }}>
          <a href="/#" title="Nhấn để xem chi tiết">
            <i className="fa fa-eye" />
          </a>
          &nbsp; &nbsp;
          <a href="/#" title="Nhấn để chỉnh sửa">
            <i className="fa fa-pencil-square" />
          </a>
          &nbsp; &nbsp;
          <a href="/#" title="Nhấn để xóa" style={{ color: "red" }}>
            <i className="fa fa-trash" />
          </a>
          &nbsp;
        </td>
      </tr>
    );
  }
}

export default RepositoryRow;
