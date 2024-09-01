import React, { useState } from 'react'

function Input({ id, type, name, val, setVal, errors, setErrors,}) {
    const [show, setShow] = useState(false);
  return (
    <div className="w-full relative">
          <label
            htmlFor="username"
            className={`${
              val
                ? "text-xs -top-2 left-2 bg-white px-1 rounded-sm text-stone-800"
                : "text-sm top-[0.55rem] left-[16.8px] text-stone-600"
            } absolute duration-100 cursor-text`}
          >
            {/* Username */}
            {name[0].toUpperCase()+name.slice(1)}
          </label>
          <input
            type={type==='password'?`${show?'text':'password'}`:type}
            // id={name}
            name={name}
            value={val}
            onChange={(e) => {
            setErrors((prev)=>{
              return {...prev, name:false}
            })
              setVal(e.target.value);
            }}
            className={`w-full text-sm rounded-lg border-white ring-1 focus:ring-[#90d474] ${errors[name]?"ring-red-500":"ring-stone-300"} focus:border-white px-4`}
          />
          <div className={`text-xs absolute -top-2 right-2 px-1 text-red-500 ${errors[name]?"opacity-1 bg-white rounded-lg":"opacity-0"}`}>invalid credentials.</div>

          {type==='password' && <div
            className="absolute right-0 top-0 h-full flex items-center justify-center px-3 text-stone-500 hover:text-stone-400 duration-200 cursor-pointer border-l"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <i className="fa-solid fa-eye-slash h-4 w-4"></i>
            ) : (
              <i className="fa-solid fa-eye h-4 w-4"></i>
            )}
          </div>}
        </div>
  )
}

export default Input
