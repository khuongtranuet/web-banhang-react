import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import { routes } from "./routes";

class App extends Component {
  render() {
    var x = window.location.pathname;
    if (x.includes("/admin")) {
      return (
        <Router>
          <div className="App">
            <div className="container">
              <div className="row">{this.showContentMenus(routes)}</div>
            </div>
          </div>
        </Router>
      );
    } else {
      return (
        <Router>
          <div className="App">
            <Header />
            <div className="container">
              <div className="row">{this.showContentMenus(routes)}</div>
            </div>
          </div>
        </Router>
      );
    }
  }

  showContentMenus = (routes) => {
    var result = "";
    if (routes.length > 0) {
      result = routes.map((routes, index) => {
        return (
          <Route
            key={index}
            path={routes.path}
            exact={routes.exact}
            component={routes.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
