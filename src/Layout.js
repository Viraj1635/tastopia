import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
    return(
        <>
            <Header></Header>
            <div className="row">
                <Sidebar className="col"></Sidebar>
                <Outlet className="col"></Outlet>
            </div>
        </>
    );
}

export default Home;