import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Searchh from "../Search";
import CallAPI from "../../../utils/CallAPI";
import Paginationn from "../../Paginationn";
import { useDispatch } from "react-redux";
import Alerts from "../../Alert/Alerts";
import { alertOn } from "../../../actions/index";
import CustomerTable from "./CustomerTable";

function Customer() {
  const dispatch = useDispatch();
  const [customers, setCustomers] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    page_size: 1,
    total_rows: 1,
  });
  const [filters, setFilters] = useState({
    page: 1,
    page_size: 10,
    keyword: "",
  });

  useEffect(() => {
    CallAPI("customer/index", "GET", null, filters).then((res) => {
      if (typeof res != "undefined") {
        setCustomers(res.data.data);
        setPagination(res.data.meta_data);
      }
    });
  }, [filters]);

  function handlePageChange(newPage) {
    setFilters({
      ...filters,
      page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    setFilters({
      ...filters,
      page: 1,
      keyword: newFilters.searchTerm,
    });
  }
  function handleCustomerChange(id) {
    CallAPI(`customer/index/${id}`, "DELETE", null, null).then((res) => {
      if (res.status === 204) {
        setCustomers(customers.filter((customer) => customer.id !== id));
        dispatch(alertOn());
        // }
      }
    });
  }
  return (
    <div>
      <div className="col-lg-12">
        <Alerts content={"Xóa kho hàng thành công!"} type={"success"} />
      </div>
      <h3 className="col-lg-12 col-sm-12">Danh sách người dùng</h3>
      <div className="col-lg-12 col-sm-12" style={{ marginTop: "20px" }}>
        <div className="row" style={{ marginBottom: "5px" }}>
          {/* Tìm kiếm theo từ khóa */}
          <div className="col-lg-3 col-sm-3 col-xs-12">
            <Searchh onSubmit={handleFiltersChange} />
          </div>
          {/* Lọc theo phòng ban */}
          <div
            className="col-lg-3 col-sm-3 col-xs-12 add"
            style={{ marginLeft: "-15px" }}
          >
            <select className="form-control" name="type" id="type">
              <option value={-1}>- Loại -</option>
              <option value={0}>Khách vãng lai</option>
              <option value={1}>Người dùng hệ thống</option>
            </select>
          </div>
          <div
            className="col-lg-2 col-sm-3 col-xs-12"
            style={{ marginLeft: "-15px" }}
          >
            <select className="form-control" name="status" id="status">
              <option value={-1}>- Trạng thái -</option>
              <option value={0}>Chưa kích hoạt</option>
              <option value={1}>Kích hoạt</option>
              <option value={2}>Đang khóa</option>
            </select>
          </div>
          <div className="col-lg-1 col-sm-1 col-xs-6">
            <button
              className="btn btn-primary"
              id="reset_search"
              style={{ marginLeft: "-15px" }}
            >
              Tải lại
            </button>
          </div>
          {/* Thêm mới */}
          <div
            className="col-lg-2 col-sm-2 col-xs-6"
            style={{ float: "right", textAlign: "right" }}
          >
            <Link to="/admin/customer/add">
              <button className="btn btn-primary">Thêm</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-12 col-sm-12">
        <div className="table-responsive">
          <CustomerTable
            filters={filters}
            customers={customers}
            onCustomerChange={handleCustomerChange}
          />
        </div>
      </div>
      <div
        className="col-lg-12 col-sm-12 text-center"
        style={{ marginBottom: "10px" }}
      >
        <Paginationn pagination={pagination} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default Customer;
