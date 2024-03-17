import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
          <div>
            <h1 className="text-5xl font-sign ml-2">Sazedur</h1>
          </div>
          <ul className=" md:flex">
            <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to="/home">Home</Link>
            </li>
            <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to="/about">About</Link>
            </li>
            <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to="/quote">Quote</Link>
            </li>
            <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to="/experience">Experience</Link>
            </li>
            <li className="px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
