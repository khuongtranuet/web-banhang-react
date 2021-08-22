import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { routesAdmin } from "../../routes";
import FooterAdmin from "./FooterAdmin";
import LeftSideBar from "./LeftSideBar";

class Dashboard extends Component {
  render() {
    return (
      <div id="wrapper">
        {/* NAVBAR */}
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="brand" style={{ width: "260px" }}>
            <Link to="/admin">
              <span style={{ fontSize: "20px" }}>QUẢN LÍ WEBSITE</span>
            </Link>
          </div>
          <div className="container-fluid">
            <div className="navbar-btn">
              <button type="button" className="btn-toggle-fullwidth">
                <i className="lnr lnr-arrow-left-circle" />
              </button>
            </div>
            <form className="navbar-form navbar-left">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập để tìm kiếm . . . . ."
                />
                <span className="input-group-btn">
                  <button type="button" className="btn btn-primary">
                    Tìm kiếm
                  </button>
                </span>
              </div>
            </form>
            <div id="navbar-menu">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a
                    href="/#"
                    className="dropdown-toggle icon-menu"
                    data-toggle="dropdown"
                  >
                    <i className="lnr lnr-alarm" />
                    <span className="badge bg-danger">5</span>
                  </a>
                  <ul className="dropdown-menu notifications">
                    <li>
                      <a href="/#" className="notification-item">
                        <span className="dot bg-warning" />
                        System space is almost full
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="notification-item">
                        <span className="dot bg-danger" />
                        You have 9 unfinished tasks
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="notification-item">
                        <span className="dot bg-success" />
                        Monthly report is available
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="notification-item">
                        <span className="dot bg-warning" />
                        Weekly meeting in 1 hour
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="notification-item">
                        <span className="dot bg-success" />
                        Your request has been approved
                      </a>
                    </li>
                    <li>
                      <a href="/#" className="more">
                        See all notifications
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="/#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <i className="lnr lnr-question-circle" />{" "}
                    <span>Trợ giúp</span>{" "}
                    <i className="icon-submenu lnr lnr-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/#">Basic Use</a>
                    </li>
                    <li>
                      <a href="/#">Working With Data</a>
                    </li>
                    <li>
                      <a href="/#">Security</a>
                    </li>
                    <li>
                      <a href="/#">Troubleshooting</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="/#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img src="/#" className="img-circle" alt="Avatar" />
                    <span>ADMIN</span>{" "}
                    <i className="icon-submenu lnr lnr-chevron-down" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/#">
                        <i className="lnr lnr-user" /> <span>My Profile</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="lnr lnr-envelope" /> <span>Message</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="lnr lnr-cog" /> <span>Settings</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <i className="lnr lnr-exit" /> <span>Logout</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END NAVBAR */}
        <LeftSideBar />
        {/* MAIN */}
        <div className="main">
          {/* MAIN CONTENT */}
          <div className="main-content">
            {/* <div className="container-fluid"> */}
            <div
              className="container-fluid"
              style={{
                color: "black",
                backgroundColor: "white",
                marginLeft: "0px",
                minWidth: "1170px",
              }}
            >
              {/* <Switch>
                <Route
                  path="/admin/repository"
                  exact
                  component={RepositoryPage}
                ></Route>
              </Switch> */}
              {this.showContentMenus(routesAdmin)}
            </div>
          </div>
        </div>
        {/* END MAIN CONTENT */}
        {/* </div> */}
        {/* END MAIN */}
        {/* <div className="clearfix" /> */}
        <FooterAdmin />
      </div>
    );
  }

  showContentMenus = (routesAdmin) => {
    var result = "";
    if (routesAdmin.length > 0) {
      result = routesAdmin.map((routesAdmin, index) => {
        return (
          <Route
            key={index}
            path={routesAdmin.path}
            exact={routesAdmin.exact}
            component={routesAdmin.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default Dashboard;
