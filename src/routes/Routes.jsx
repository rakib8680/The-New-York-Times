import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Category from "../pages/Category";
import News from "../pages/News";
import NewsDetails from "../pages/NewsDetails";



const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [

            {
                path: '/category/:id',
                element: <Category></Category>
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