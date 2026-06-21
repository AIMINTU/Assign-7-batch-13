import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import Timeline from "../page/Timeline";
import ProfileDetails from "../page/ProfileDetails";
import ErrorPage from "../page/errorPage/ErrorPage";
import FriendChart from "../page/FriendChart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
    {
        path:"/",
        element:<Home></Home>,
        hydrateFallbackElement:<div>Loading.....</div>
    },
    {
        path:"/timeline",
        element:<Timeline></Timeline>
    },
    {
        path:"/status",
        element:<FriendChart></FriendChart>
    },
    {
        path:"/userDetails/:id",
        element:<ProfileDetails></ProfileDetails>,
        loader:()=>fetch('/friends.json'),
        hydrateFallbackElement:<div>Loading.....</div>
    },
    {
        path:"/page/errorPage",
        element:<ErrorPage></ErrorPage>
    }
]
  },
]);