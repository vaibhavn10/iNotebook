import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import Menu from "./Menu";
import { Link } from "react-router-dom";

function Topbar() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const topbar = document.getElementById("topbar");
      if (window.scrollY >= 80) {
        topbar.style.backdropFilter = "blur(5px)"
        topbar.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      } else {
        topbar.style.backgroundColor = "transparent";
      }
    });
  }, []);

  return (
    <div
      className="px-4 sm:px-8 md:px-16 lg:px-28 py-4 fixed top-0 w-full z-[2] duration-200"
      id="topbar"
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-0 md:gap-8">
          <a href="/" className="">
            <img src={logo} alt="..." className="h-8 object-cover" />
          </a>
          <div className="hidden md:block w-[1px] h-6 bg-stone-200 rounded-full"></div>
          <div className="flex">
            <Menu />
          </div>
        </div>
        <div className="flex text-sm font-medium text-stone-700 w-52 gap-2">
          <Link
            to="/auth/login"
            className="px-3 md:px-4 py-2 rounded-lg bg-gray-50/50 flex flex-1 items-center justify-center border border-stone-200 hover:border-[#78c454] hover:bg-[#78c454]/85 hover:text-white duration-200 cursor-pointer"
          >
            Sign in
          </Link>
          <Link
            to="/auth/register"
            className="px-3 md:px-4 py-2 rounded-lg bg-gray-50/50 flex flex-1 items-center justify-center border border-stone-200 hover:border-[#78c454] hover:bg-[#78c454]/85 hover:text-white duration-200 cursor-pointer"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
