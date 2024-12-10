import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-screen-2xl md:mx-0 mx-2">
      <Navbar></Navbar>
      <div className="container mx-auto min-h-[calc(100vh-548px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
