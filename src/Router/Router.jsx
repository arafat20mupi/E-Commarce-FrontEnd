import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import ProductDetails from "../components/Productdetails/ProductDetails"
import Product from "../components/Product/Product";
import AddToCart from "../components/AddtoCart/AddToCart";
import SignUp from "../components/SignUp/SignUp";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile/Profile";
import AddProduct from "../Dashboard/Product/AddProduct";
import Order from "../Dashboard/Order/Order";
import User from "../Dashboard/User/User";
import AllProduct from "../Dashboard/Product/AllProduct";

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
        path: "/products",
        element: <Product />,
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
  {
    path:"/dashboard",
    element:<Dashboard/>,
    children: [
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: 'addProduct',
        element: <AddProduct />
      },
      {
        path: 'allProducts',
        element: <AllProduct />
      },
      {
        path: 'order',
        element: <Order />
      },
      {
        path: 'AllUsers',
        element: <User />
      }
    ]
  }
]);
