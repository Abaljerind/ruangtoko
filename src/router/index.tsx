import { createBrowserRouter, type RouteObject } from "react-router-dom";
import RootLayout from "../../RootLayout";
import Homepage from "../pages/Homepage";
import ProductListPage from "../pages/ProductListPage";
import OrderHistoryPage from "../pages/OrderHistoryPage";
import CartPage from "../pages/CartPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/products",
        element: <ProductListPage />,
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
