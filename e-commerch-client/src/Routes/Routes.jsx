import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRout from "./PrivetRout";
import SecretRout from "../Shared/SecretRout/SecretRout";
import ProfileDetails from "../pages/ProfileDetails/ProfileDetails";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        }, 
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        // {
        //   path: "/order",
        //   element: <Order></Order>
        // },
        {

          path: "/order/:category",
          element: <Order></Order>
        },
        
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/singup',
          element: <SignUp></SignUp>
        },
        {
          path: '/secret',
          element: <PrivetRout> <SecretRout></SecretRout> </PrivetRout>
        },
        {
          path:'/profile',
          element: <ProfileDetails></ProfileDetails>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart', // Correctly defined as relative
          element: <Cart></Cart>
        }
      ]
    }

  ]);
  