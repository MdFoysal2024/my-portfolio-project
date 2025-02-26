import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../components/Home";
import Resume from "../components/Resume";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
