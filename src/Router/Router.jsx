import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Products from "../components/Home/Products/Products";
import ProductDetails from "../components/Productdetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
