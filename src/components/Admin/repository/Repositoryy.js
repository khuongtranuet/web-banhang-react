import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReponsitoryTable from "./ReponsitoryTable";
import CallAPI from "../../../utils/CallAPI";
import Paginationn from "../../Paginationn";
import Searchh from "../Searchh";
import { useDispatch } from "react-redux";
import Alerts from "../../Alert/Alerts";
import { alertOn } from "../../../actions/index";

function Repositoryy() {
  const dispatch = useDispatch();
  const [repositories, setRepositories] = useState([]);
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
  //   console.log("pagination: ", pagination);
  useEffect(() => {
    CallAPI("repository", "GET", null, filters).then((res) => {
      //   console.log(res);
      if (typeof res != "undefined") {
        setRepositories(res.data.data);
        setPagination(res.data.meta_data);
      }
    });
  }, [filters]);

  function handlePageChange(newPage) {
    // console.log("neww page: ", newPage);
    setFilters({
      ...filters,
      page: newPage,
    });
  }

  function handleFiltersChange(newFilters) {
    // console.log(newFilters);
    setFilters({
      ...filters,
      page: 1,
      keyword: newFilters.searchTerm,
    });
  }
  function handleRepositoryChange(id) {
    CallAPI(`repository/index/${id}`, "DELETE", null, null).then((res) => {
      if (res.status === 204) {
        setRepositories(
          repositories.filter((repository) => repository.id !== id)
        );
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
      <h3 className="col-lg-12 col-sm-12">Danh sách kho hàng</h3>
      <div className="col-lg-12 col-sm-12" style={{ marginTop: "20px" }}>
        <div className="row" style={{ marginBottom: "5px" }}>
          {/* Tìm kiếm theo từ khóa */}
          <div className="col-lg-3 col-sm-3 col-xs-12">
            <Searchh onSubmit={handleFiltersChange} />
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
            filters={filters}
            repositories={repositories}
            onRepositoryChange={handleRepositoryChange}
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

export default Repositoryy;
