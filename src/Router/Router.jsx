import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ProductDetails from "../components/Productdetails/ProductDetails"
import AddToCart from "../components/AddtoCart/AddToCart";
import SignUp from "../components/SignUp/SignUp";
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
      {
        path: "/addToCart",
        element:<AddToCart></AddToCart>
      },
      {
        path: "/signup",
        element:<SignUp></SignUp>
      },
    ],
  },
]);
