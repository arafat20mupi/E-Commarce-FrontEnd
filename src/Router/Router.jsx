import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
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
      {
        path: "/details",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
]);
