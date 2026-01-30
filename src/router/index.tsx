import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Homepage from "../pages/Homepage";
import ProductListPage from "../pages/ProductListPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import CartPage from "../pages/CartPage";
import ErrorPage from "../pages/ErrorPage";

import { homepageLoader as homeLoader } from "../../apis/homepageLoader";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: homeLoader,
      },
      {
        path: "/products",
        element: <ProductListPage />,
        loader: homeLoader,
      },
      {
        path: "/order",
        element: <OrderHistoryPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
