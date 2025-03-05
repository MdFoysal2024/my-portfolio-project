import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const Main = () => {

    return (
        <div className=" text-white">
            <Navbar></Navbar>


            <div className="pt-16">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;