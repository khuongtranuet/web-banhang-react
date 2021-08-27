import React from "react";
import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/LoginPage/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import RepositoryPage from "./pages/AdminPage/repository/RepositoryPage";
import AdminHomePage from "./pages/AdminPage/AdminHomePage";
import CategoryPage from "./pages/AdminPage/category/CategoryPage";
import CategoryAddPage from "./pages/AdminPage/category/CategoryAddPage";
import ProductAddPage from "./pages/AdminPage/product/ProductAddPage";

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
    main: () => <LoginPage />,
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
    path: "/admin/repository",
    exact: false,
    main: () => <RepositoryPage />,
  },
  {
    path: "/admin",
    exact: true,
    main: () => <AdminHomePage />,
  },
  {
    path: "/admin/category/add",
    exact: true,
    main: ({history}) => <CategoryAddPage history={history}/>,
  },
  {
    path: "/admin/product/add",
    exact: true,
    main: ({history}) => <ProductAddPage history={history}/>,
  },
  {
    path: "/admin/category",
    exact: false,
    main: () => <CategoryPage/>,
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
