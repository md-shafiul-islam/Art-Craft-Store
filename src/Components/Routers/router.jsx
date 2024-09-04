import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error404Page from "../../pages/error404Page";
import HomePage from "../../pages/home";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import axios from "axios";
import AddProductPage from "../../pages/addProductPage";
import { getAllCategory } from "../../utils/loader-api";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error404Page />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/add-items",
        element: <AddProductPage />,
        loader: getAllCategory,
      },
    ],
  },
]);

export default router;
