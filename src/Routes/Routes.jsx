import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddArticle from "../pages/AddArticle/AddArticle";
import AllArticles from "../pages/AllArticles/AllArticles";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
        path: '/',
        element:<Home></Home>
        },
        {
        path: '/allArticles',
        element:<AllArticles></AllArticles>
        },
        {
        path: '/addArticle',
        element:<AddArticle></AddArticle>
        },
        {
        path: '/signIn',
        element:<SignIn></SignIn>
        },
        {
        path: '/signUp',
        element:<SignUp></SignUp>
        },

    ]
  },
]);