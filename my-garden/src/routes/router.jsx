import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import ShareTip from "../pages/ShareTip";
import BrowseTips from "../pages/BrowseTips";
import MyTips from "../pages/MyTips";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import UpdateTip from "../pages/UpdateTip";
import TipDetails from "../pages/TipDetails";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[{
        path: '/',
        loader: ()=> fetch('http://localhost:3000/plants?limit=6'),
        Component: Home
    },
    {
      path: '/sharetips',
      Component: ShareTip
    },
    {
      path: '/browsetips',
      loader: ()=> fetch('http://localhost:3000/plants'),
      Component: BrowseTips
    },
    {
      path: '/mytips',
      loader: ()=> fetch('http://localhost:3000/plants'),
      Component: MyTips
    },
    {
      path: '/login',
      Component: LoginPage
    },
    {
      path: '/register',
      Component: RegisterPage
    },
    {
      path: '/plant/:id',
      loader: ({params})=> fetch(`http://localhost:3000/plants${params.id}`),
      Component: UpdateTip
    },
    {
      path: '/plants/plant/:id',
      loader: ({params})=> fetch(`http://localhost:3000/plants${params.id}`),
      Component: TipDetails 
    }

    ]
  }
])

export default router;