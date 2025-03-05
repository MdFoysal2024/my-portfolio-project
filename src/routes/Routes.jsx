import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Main from "../Layout/Main";
import Error from "../components/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/resume",
                element: <Resume></Resume>
            }
        ]
    },
]);

export default router;
