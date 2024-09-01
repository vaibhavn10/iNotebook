import React, { useEffect, useState } from "react";
import authImg from "../assets/auth.jpg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

function Auth() {
  const { auth } = useParams();
  const [left, setLeft] = useState("0%");
  useEffect(() => {
    window.addEventListener("popstate", (event) => {
      window.location.replace('/')
    });

    if (auth === "/login") {
      setLeft("0%");
    } else {
      setLeft("100%");
    }
  }, [left]);

  return (
    <div className="px-4 sm:px-8 md:px-0 md:pl-16 lg:pl-28 h-screen mt-[-72px]">
      <div className="flex justify-between h-screen">
        <div className="flex flex-row items-center justify-start w-full md:w-[40%] lg:w-[30%] h-full relative overflow-x-hidden scrollbarnone">
          <div className={`flex flex-row items-center gap-6 justify-center w-[200%]  h-full absolute -left-[${
            auth === "login" ? "0%" : "100%"
          }] duration-200`}>
            <Login />
            <Register />
          </div>
        </div>
        <div className="hidden md:block w-0 md:w-1/2 h-full overflow-x-scroll scrollbarnone">
          <div className="flex w-full h-full">
            <img
              src={authImg}
              alt="..."
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
