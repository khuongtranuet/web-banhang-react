import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeftSideBar extends Component {
  render() {
    return (
      <div id="sidebar-nav" className="sidebar">
        <div className="sidebar-scroll">
          <nav>
            <ul className="nav">
              <li style={{ marginTop: "8px" }}>
                <Link to="/admin">
                  <i className="fa fa-home" />
                  Trang chủ
                </Link>
              </li>
              <li>
                <a
                  href="#category"
                  data-toggle="collapse"
                  className="collapsed"
                >
                  <i className="fa fa-th" />
                  QL.Danh mục
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="category" className="collapse">
                  <ul className="nav">
                    <li>
                      <a href="/#" className="">
                        Mục 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Mục 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#product" data-toggle="collapse" className="collapsed">
                  <i className="fa fa-dropbox" />
                  QL.Sản phẩm
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="product" className="collapse">
                  <ul className="nav">
                    <li>
                      <a href="/#" className="">
                        Mục 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Mục 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#order" data-toggle="collapse" className="collapsed">
                  <i className="fa fa-file-text" />
                  QL.Đơn hàng
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="order" className="collapse">
                  <ul className="nav">
                    <li>
                      <a href="/#" className="">
                        Mục 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Mục 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#ship" data-toggle="collapse" className="collapsed">
                  <i className="fa fa-truck" />
                  QL.Ship hàng
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="ship" className="collapse">
                  <ul className="nav">
                    <li>
                      <a href="/#" className="">
                        Mục 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Mục 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#customer"
                  data-toggle="collapse"
                  className="collapsed"
                >
                  <i className="fa fa-user" />
                  QL.Khách hàng
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="customer" className="collapse">
                  <ul className="nav">
                    <li>
                      <Link to="/admin/customer">Danh sách khách hàng</Link>
                    </li>
                    <li>
                      <Link to="/admin/customer/add">Thêm mới khách hàng</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#statistic"
                  data-toggle="collapse"
                  className="collapsed"
                >
                  <i className="fa fa-files-o" />
                  Thống kê
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="statistic" className="collapse">
                  <ul className="nav">
                    <li>
                      <a href="/#" className="">
                        Mục 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Mục 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#storage" data-toggle="collapse" className="collapsed">
                  <i className="fa fa-university" />
                  QL.Kho hàng
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="storage" className="collapse">
                  <ul className="nav">
                    <li>
                      <Link to="/admin/repository">Danh sách kho hàng</Link>
                    </li>
                    <li>
                      <Link to="/admin/repository/add">Thêm mới kho hàng</Link>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Nhập kho
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#discount"
                  data-toggle="collapse"
                  className="collapsed"
                >
                  <i className="fa fa-percent" />
                  QL.Giảm giá
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </a>
                <div id="discount" className="collapse">
                  <ul className="nav">
                    <li>
                      <a href="/#" className="">
                        Mục 1
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="">
                        Mục 2
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default LeftSideBar;
