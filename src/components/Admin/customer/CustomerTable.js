import React, { Component } from "react";
import CustomerRow from "./CustomerRow";

class CustomerTable extends Component {
  onDelete = (id) => {
    console.log(id);
    this.handleCustomerChange(id);
  };

  handleCustomerChange = (newCustomer) => {
    this.props.onCustomerChange(newCustomer);
  };

  render() {
    const filters = this.props.filters;
    const rows = [];
    var from = (filters.page - 1) * filters.page_size;
    this.props.customers.forEach((customer, index) => {
      rows.push(
        <CustomerRow
          customer={customer}
          key={index}
          id={from + index}
          onDelete={this.onDelete}
        />
      );
    });

    if (rows.length === 0) {
      rows.push(
        <tr key={""}>
          <td colSpan="8">Không có dữ liệu</td>
        </tr>
      );
    }

    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Họ và tên</th>
            <th className="text-center">Email</th>
            <th className="text-center">Số điện thoại</th>
            <th className="text-center">Loại</th>
            <th className="text-center">Trạng thái</th>
            <th className="text-center">Xử lý</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default CustomerTable;
