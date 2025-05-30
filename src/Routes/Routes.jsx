import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AddArticle from "../pages/AddArticle/AddArticle";
import AllArticles from "../pages/AllArticles/AllArticles";

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

    ]
  },
]);