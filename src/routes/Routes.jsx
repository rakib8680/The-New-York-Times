import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Career from "../pages/Career";
import Category from "../pages/Category";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import LoginLayout from "../pages/LoginLayout";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to="/category/0"></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'about',
                element : <About></About>
            },
            {
                path: 'career',
                element : <Career></Career>            }
        ]
    },
    {
        path: 'category',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-rakib8680.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <PrivateRoute><News></News></PrivateRoute>,
        children: [
            {
                path: ':id',
                element: <NewsDetails></NewsDetails>,
                loader: ({ params }) => fetch(`https://the-dragon-news-server-rakib8680.vercel.app/news/${params.id}`)
            }
        ]
    }
]);

export default router;