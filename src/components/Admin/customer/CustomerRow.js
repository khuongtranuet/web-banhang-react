import React, { Component } from "react";

class CustomerRow extends Component {
  onDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa ?")) {
      this.props.onDelete(id);
    }
  };

  render() {
    const customer = this.props.customer;
    var typeCustomer = "";
    var statusCustomer = "";
    if (customer.type === "1") {
      typeCustomer = "Người dùng hệ thống";
    } else {
      typeCustomer = "Khách vãng lai";
    }

    if (customer.status === "0") {
      statusCustomer = "Chưa kích hoạt";
    } else if (customer.status === "1") {
      statusCustomer = "Kích hoạt";
    } else {
      statusCustomer = "Tạm khóa";
    }
    return (
      <tr>
        <td className="text-center">{this.props.id + 1}</td>
        <td>{customer.fullname}</td>
        <td>{customer.email}</td>
        <td>{customer.mobile}</td>
        <td>{typeCustomer}</td>
        <td>{statusCustomer}</td>
        <td className="text-center " style={{ width: "110px" }}>
          <a href="/#" title="Nhấn để xem chi tiết">
            <i className="fa fa-eye" />
          </a>
          &nbsp; &nbsp;
          <a href="/#" title="Nhấn để chỉnh sửa">
            <i className="fa fa-pencil-square" />
          </a>
          &nbsp; &nbsp;
          <a
            href="#!"
            title="Nhấn để xóa"
            style={{ color: "red" }}
            onClick={() => {
              this.onDelete(customer.id);
            }}
          >
            <i className="fa fa-trash" />
          </a>
          &nbsp;
        </td>
      </tr>
    );
  }
}

export default CustomerRow;
