import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Category from "../pages/Category";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import LoginLayout from "../pages/LoginLayout";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";
import Register from "../pages/Register";



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
            }
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
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <News></News>,
        children: [
            {
                path: ':id',
                element: <NewsDetails></NewsDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    }
]);

export default router;