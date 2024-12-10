import { NavLink, useLocation } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getStoredList, getStoredWishList } from "../utility/addToDatabase";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isStatistics = location.pathname === "/statistics";
  const navbarLinks = (
    <>
      <li>
        <NavLink to={`/`}>Home</NavLink>
      </li>
      <li>
        <NavLink to={`/statistics`}>Statistics</NavLink>
      </li>
      <li>
        <NavLink to={`dashboard`}>Dashboard</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );

  const [cartCount, setCartCount] = useState([]);
  const [wishListCount, setWishListCount] = useState([]);
  
  useEffect(() => {
    const storedList = getStoredList();
    setCartCount(storedList);
  },[cartCount]);
  
  
  useEffect(() => {
    const storedList = getStoredWishList();
    setWishListCount(storedList);
  },[wishListCount]);

  return (
    <div
      className={` top-0  z-10  ${
        isHome
          ? "bg-[#9538E2] text-white px-10"
          : isStatistics
          ? "bg-white"
          : "bg-white text-gray-800"
      }`}
    >
      <div className="navbar container mx-auto py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-purple-600 rounded-box z-[1] mt-3 w-52 py-2 shadow gap-4"
            >
              {navbarLinks}
            </ul>
          </div>
          <NavLink to={"/"} className="ml-2 md:ml-2 text-2xl font-bold">
            Gadget Heaven
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1 text-base gap-2">
            {navbarLinks}
          </ul>
        </div>
        <div className="navbar-end text-2xl gap-4 text-white relative">
          <div className="absolute right-16 bottom-8 text-red-500 bg-white px-2 rounded-full text-sm font-semibold">
            <p>{cartCount.length}</p>
          </div>
          <NavLink to="/dashboard" className={`bg-purple-600 p-3 rounded-full`}>
            <IoMdCart />
          </NavLink>
          <div className="absolute bottom-8 text-red-500 bg-white px-2 rounded-full text-sm font-semibold">
            <p>{wishListCount.length}</p>
          </div>
          <NavLink
            to={"/dashboard"}
            className={`bg-purple-600 p-3 rounded-full`}
          >
            <FaRegHeart />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
