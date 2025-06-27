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
import PrivateRoute from "../Context/PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children:[{
        path: '/',
        loader: ()=> fetch('https://garden-server-phi.vercel.app/plants?limit=6'),
        Component: Home
    },
    {
      path: '/sharetips',
      element: <PrivateRoute><ShareTip></ShareTip></PrivateRoute>
    },
    {
      path: '/browsetips',
      loader: ()=> fetch('https://garden-server-phi.vercel.app/plants'),
      Component: BrowseTips
    },
    {
      path: '/mytips',
      loader: ()=> fetch('https://garden-server-phi.vercel.app/plants'),
      element: <PrivateRoute><MyTips></MyTips></PrivateRoute>
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
      path: '/update/:id',
      loader: ({params})=> fetch(`https://garden-server-phi.vercel.app/plants${params.id}`),
      element: <PrivateRoute><UpdateTip></UpdateTip></PrivateRoute>
    },
    {
      path: '/plants/plant/:id',
      loader: ({params})=> fetch(`https://garden-server-phi.vercel.app/plants${params.id}`),
      element: <PrivateRoute><TipDetails></TipDetails></PrivateRoute> 
    }

    ]
  }
])

export default router;