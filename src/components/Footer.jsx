import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-32 py-20 md:py-24 border-t">
      <div className="flex flex-col gap-6">
        <div className="flex">
          <div className="flex gap-8 text-sm text-gray-700 font-medium">
            <div className="">Ask us</div>
            <div className="">Why us</div>
            <div className="">Blogs</div>
          </div>
          <div className="flex"></div>
        </div>
        <div className="h-0.5 w-full bg-stone-200 rounded-full mx-2"></div>
        <div className="flex flex-col md:flex-row w-full justify-between items-center text-gray-700 gap-4">
          <div className="flex text-xs md:text-sm">
            &#169; 2022 needed. All rights reserved.
          </div>
          <div className="flex">
            <img src={logo} alt="..." className="h-10 object-cover" />
          </div>
          <div className="flex gap-4 text-xs md:text-sm font-medium">
            <div className="">Terms of Service</div>
            <div className="">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
