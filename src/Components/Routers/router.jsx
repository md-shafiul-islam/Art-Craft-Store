import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error404Page from "../../pages/error404Page";
import HomePage from "../../pages/home";
import { LoginPage } from "../../pages/login";
import { RegisterPage } from "../../pages/register";
import AddProductPage from "../../pages/addProductPage";
import {
  getAllCategory,
  getCraftItems,
  getCraftItemsByCat,
  getCraftItemsById,
} from "../../utils/loader-api";
import ItemSinglePage from "../../pages/itemSinglePage";
import CategoryPage from "../../pages/categoryPage";
import ArtAndCraft from "../../pages/artAndCraft";
import ContactPage from "../../pages/contactPage";

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
      {
        path: "/art-crafts",
        element: <ArtAndCraft />,
        loader: getCraftItems,
      },
      {
        path: "/art-crafts/:id",
        element: <ItemSinglePage />,
        loader: async ({ params }) => {
          return getCraftItemsById(params?.id);
        },
      },
      {
        path: "/categories/:cat",
        element: <CategoryPage />,
        loader: async ({ params }) => {
          return getCraftItemsByCat(params?.cat);
        },
      },
      {
        path: "/contact-us",
        element: <ContactPage />,
      },
    ],
  },
]);

export default router;
