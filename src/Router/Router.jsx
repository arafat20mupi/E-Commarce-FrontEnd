import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import AddToCart from "../components/AddtoCart/AddToCart";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Product from "../components/Product/Product";
import ProductDetails from "../components/Productdetails/ProductDetails";
import SignUp from "../components/SignUp/SignUp";
import AllOrders from "../Dashboard/AllOrders/AllOrders";
import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../Dashboard/Product/AddProduct";
import AllProduct from "../Dashboard/Product/AllProduct";
import Profile from "../Dashboard/Profile/Profile";
import User from "../Dashboard/User/User";
import PrivateRouter from "./PrivateRouter";

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
        element: <AddToCart></AddToCart>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRouter><Dashboard /></PrivateRouter>,
    children: [
      {
        path: 'profile',
        element: <PrivateRouter><Profile /></PrivateRouter>
      }, 
      {
        path: 'addProduct',
        element: <PrivateRouter><AddProduct /> </PrivateRouter>
      },
      {
        path: 'allProducts',
        element: <PrivateRouter><AllProduct /></PrivateRouter>
      },
      {
        path: 'order',
        element: <PrivateRouter><AllOrders /></PrivateRouter>
      },
      {
        path: 'AllUsers',
        element: <PrivateRouter><User /></PrivateRouter>
      }
    ]
  }
]);
