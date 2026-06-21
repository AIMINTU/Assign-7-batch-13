import { Outlet } from "react-router";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../page/Footer";


const MainLayout = () => {
    return (
        <div className="container mx-auto my-10">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;