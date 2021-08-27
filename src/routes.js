import React from "react";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/LoginPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AdminHomePage from "./pages/AdminPage/AdminHomePage";

import RepositoryPage from "./pages/AdminPage/repository/RepositoryPage";
import RepositoryAddPage from "./pages/AdminPage/repository/RepositoryAddPage";

import CustomerPage from "./pages/AdminPage/customer/CustomerPage";
import CustomerAddPage from "./pages/AdminPage/customer/CustomerAddPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/cart",
    exact: false,
    main: () => <CartPage />,
  },
  {
    path: "/login",
    exact: false,
    main: ({ history }) => <LoginPage history={history} />,
  },
  {
    path: "/register",
    exact: false,
    main: () => <RegisterPage />,
  },
  {
    path: "/admin",
    exact: false,
    main: () => <AdminPage />,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

const routesAdmin = [
  {
    path: "/admin/repository/add",
    exact: true,
    main: () => <RepositoryAddPage />,
  },
  {
    path: "/admin/repository",
    exact: false,
    main: () => <RepositoryPage />,
  },
  {
    path: "/admin/customer/add",
    exact: true,
    main: () => <CustomerAddPage />,
  },
  {
    path: "/admin/customer",
    exact: false,
    main: () => <CustomerPage />,
  },
  {
    path: "/admin",
    exact: true,
    main: () => <AdminHomePage />,
  },
  {
    path: "/admin/:something",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

// export default routesAdmin;
// export default routes;
export { routes, routesAdmin };
