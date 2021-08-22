import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from "../../images/banner.png";
import logo from "../../images/logo.png";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

class Header extends Component {
  render() {
    return (
      <>
        <div style={{ backgroundColor: "#FFF200" }}>
          <div className="container">
            <div className="row">
              <img src={banner} alt="banner-top" />
            </div>
          </div>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <div className="container">
            <div className="row" style={{ height: "45px" }}>
              <div className="col-lg-2">
                <Link to="/">
                  <img className="logo_web" src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-lg-2">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <li
                      className="dropdown btn btn-primary"
                      style={{ backgroundColor: "black", borderColor: "black" }}
                    > */}
                    <div
                      className="dropdown-toggle btn"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        color: "white",
                        marginTop: "0px",
                        display: "flex",
                      }}
                    >
                      <div className="col-lg-3">
                        <i className="fa fa-bars list_i"></i>
                      </div>
                      <div className="col-lg-9" style={{ marginTop: "5px" }}>
                        <span>Danh mục </span>
                        <span className="caret" />
                      </div>

                      {/* <span className="textl" /> */}
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/login">Đăng nhập</Link>
                      </li>
                      <li role="separator" className="divider" />
                      <li>
                        <Link to="/register">Tạo tài khoản</Link>
                      </li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="/#">Thoát</a>
                      </li>
                    </ul>
                    {/* </li> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="row">
                  <input
                    type="search"
                    name="search"
                    id="keyword"
                    className="form-control"
                    placeholder="Nhập để tìm kiếm"
                    style={{ marginTop: "5px", borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div className="col-lg-2">
                <Link to="/cart">
                  <div className="row btn" style={{ color: "white" }}>
                    <div className="col-lg-4">
                      <StyledBadge badgeContent={4} color="secondary">
                        <i className="fa fa-shopping-cart list_i"></i>
                      </StyledBadge>
                    </div>
                    <div className="col-lg-8" style={{ marginTop: "5px" }}>
                      <span>Giỏ hàng</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-2">
                <div className="row">
                  <div className="col-lg-12">
                    {/* <li
                      className="dropdown btn btn-primary"
                      style={{ backgroundColor: "black", borderColor: "black" }}
                    > */}
                    <div
                      className="dropdown-toggle btn row"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{
                        color: "white",
                        marginTop: "0px",
                        display: "flex",
                        marginLeft: "15px",
                      }}
                    >
                      <div className="col-lg-3">
                        <i className="fa fa-user-circle-o list_i"></i>
                      </div>
                      <div
                        className="col-lg-9"
                        style={{ float: "right", marginTop: "5px" }}
                      >
                        <span>Tài khoản </span>
                        <span className="caret" />
                      </div>

                      {/* <span className="textl" /> */}
                    </div>
                    <ul className="dropdown-menu">
                      <li>
                        <Link to="/login">Đăng nhập</Link>
                      </li>
                      <li role="separator" className="divider" />
                      <li>
                        <Link to="/register">Tạo tài khoản</Link>
                      </li>
                      <li role="separator" className="divider" />
                      <li>
                        <a href="/#">Thoát</a>
                      </li>
                    </ul>
                    {/* </li> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
