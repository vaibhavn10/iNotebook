import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Forms/Input";
import { API } from "../api";
import { useDispatch } from "react-redux";
import { actions } from "../store";

function Login({ auth }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    let error = {};
    if (!email) error.email = true;
    if (!password) error.password = true;
    if (Object.keys(error).length === 0) {
      dispatch(actions.setProgress(5));
      setErrors({});
      const body = { email, password };
      const url = `${API}/api/login`;
      dispatch(actions.setProgress(10));
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      dispatch(actions.setProgress(20));
      const data = await response.json();
      dispatch(actions.setProgress(50));
      sessionStorage.setItem("authtoken", data.token);
      setTimeout(() => {
        dispatch(actions.setProgress(100));
        window.location.pathname = '/dashboard';        
      }, 1000);
    } else {
      setErrors(error);
    }
  };
  return (
    <div className={`flex flex-col gap-8 px-2 w-full`} id="login">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">Welcome back</h1>
        <div className="font-medium text-sm text-stone-500">
          Enter Email and password
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input
          type="email"
          name="email"
          val={email}
          setVal={setEmail}
          errors={errors}
          setErrors={setErrors}
        />
        <Input
          type="password"
          name="password"
          val={password}
          setVal={setPassword}
          errors={errors}
          setErrors={setErrors}
        />

        {/* <div className="w-full relative">
          <label
            htmlFor="password"
            className={`${
              password
                ? "text-xs -top-2 left-2 bg-white px-1 rounded-sm text-stone-800"
                : "text-sm top-[0.55rem] left-[16.8px] text-stone-600"
            } absolute duration-100 cursor-text`}
          >
            Password
          </label>
          <input
            type={showPass ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={(e) => {
              if (!password) {
                setErrors((prev) => {
                  return { ...prev, password: false };
                });
              }
              setPassword(e.target.value);
            }}
            className="w-full text-sm rounded-lg border-white ring-1 ring-stone-300 focus:ring-[#90d474] focus:border-white px-4"
          />
          <div
            className="absolute right-0 top-0 h-full flex items-center justify-center px-3 text-stone-500 hover:text-stone-400 duration-200 cursor-pointer border-l"
            onClick={() => setShowPass(!showPass)}
          >
            {showPass ? (
              <i className="fa-solid fa-eye-slash h-4 w-4"></i>
            ) : (
              <i className="fa-solid fa-eye h-4 w-4"></i>
            )}
          </div>
        </div> */}
        <div className="w-full text-sm ">
          <button
            type="submit"
            className="py-2 bg-[#78c454] w-full rounded-full font-semibold text-white hover:bg-[#90d474] duration-200"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <div className="w-full h-0.5 rounded-full bg-stone-200"></div>
        <div className="px-4 text-sm text-gray-700 font-medium">OR</div>
        <div className="w-full h-0.5 rounded-full bg-stone-200"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <a href="/auth/googlelogin"
          className="flex items-center justify-center w-full rounded-full border border-stone-200 text-sm font-medium px-4 py-2 gap-3 hover:bg-stone-100 cursor-pointer duration-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
            alt="google_logo"
            className="h-6 w-6 rounded-full"
          />
          Sign in with Google
        </a>
      </div>
      <div className="text-sm font-medium text-center">
        Don't have an account?{" "}
        <Link
          to="/auth/register"
          className="pl-2 text-[#78c454] hover:text-[#90d474] font-semibold duration-200 cursor-pointer"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login;
