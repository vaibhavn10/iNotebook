import React, { useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../api";
import Input from "./Forms/Input";

function Register({auth}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async(e) => {
    e.preventDefault();
    let error = {};
    if (!username) error.username = true;
    if (!email) error.email = true;
    if (!password) error.password = true;
    if (Object.keys(error).length === 0) {
      setErrors({});
      const body = { name:username, password, email };
      const url = `${API}/api/register`;
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      window.location.pathname="/auth/login";
    } else {
      setErrors(error);
    }
  };

  function sendDataToParent() {
    const data = "This is the data from the new window";
    if (window.opener) {
      window.opener.receiveMessage(data);

      window.close();
    }
  }
  const handleWithGoogle = async () => {
    const url = "https://accounts.google.com/o/oauth2/auth";
    const width = 800; // Set the desired width
    const height = 600; // Set the desired height
    // Calculate the center position
    const left = screen.width / 2 - width / 2;
    const top = screen.height / 2 - height / 2;

    window.open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    sendDataToParent();

    window.receiveMessage = function (data) {
      console.log("Hello World! ", data);
      // Handle the received data here
    };
  };

  const changeErrors = (field) => {
    setErrors()
  };
  return (
    <div className={`flex flex-col gap-8 px-2 w-full`} id="register">
      <div className="flex flex-col">
        <h1 className="text-3xl font-semibold">Create a new account</h1>
        <div className="font-medium text-sm text-stone-500">
          Enter Username and password
        </div>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <Input
          type="text"
          name="username"
          val={username}
          setVal={setUsername}
          errors={errors}
          setErrors={setErrors}
        />
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
            htmlFor="password1"
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
            id="password1"
            name="password"
            value={password}
            onChange={(e) => {
              changeErrors("username");
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
            Sign Up
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <div className="w-full h-0.5 rounded-full bg-stone-200"></div>
        <div className="px-4 text-sm text-gray-700 font-medium">OR</div>
        <div className="w-full h-0.5 rounded-full bg-stone-200"></div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <button
          onClick={() => {
            handleWithGoogle();
          }}
          className="flex items-center justify-center w-full rounded-full border border-stone-200 text-sm font-medium px-4 py-2 gap-3 hover:bg-stone-100 cursor-pointer duration-200"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/480px-Google_%22G%22_logo.svg.png"
            alt="google_logo"
            className="h-6 w-6 rounded-full"
          />
          Sign up with Google
        </button>
      </div>
      <div className="text-sm font-medium text-center">
        Already have an account? <Link to="/auth/login" className="pl-2 text-[#78c454] hover:text-[#90d474] font-semibold duration-200 cursor-pointer">Sign in</Link>
      </div>
    </div>
  );
}

export default Register;
