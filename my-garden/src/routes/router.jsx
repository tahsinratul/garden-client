import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ShareTip from "../pages/ShareTip";
import BrowseTips from "../pages/BrowseTips";
import MyTips from "../pages/MyTips";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[{
        path: '/',
        Component: Home
    },
    {
      path: '/sharetips',
      Component: ShareTip
    },
    {
      path: '/browsetips',
      Component: BrowseTips
    },
    {
      path: '/mytips',
      Component: MyTips
    },
    {
      path: '/login',
      Component: LoginPage
    },
    {
      path: '/register',
      Component: RegisterPage
    }

    ]
  }
])

export default router;