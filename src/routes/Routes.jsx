import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../pages/Category";
import ErrorPage from "../pages/ErrorPage";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/category/:id',
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
                element: <NewsDetails></NewsDetails>
            }
        ]
    }
]);

export default router;