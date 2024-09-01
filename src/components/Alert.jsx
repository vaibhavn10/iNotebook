import React from "react";
import { useSelector } from "react-redux";

function Alert() {
  const alert = useSelector((state) => state.alert);
  const hideAlert = () => {
    const alert = document.getElementById("alert");
    alert.style.top = "-50px";
    alert.style.opacity = "0";
  };
  return (
    <div
      className="fixed -top-[50px] opacity-0 left-[10%] md:left-[35%] w-[80%] md:w-[30%] z-[5] duration-500"
      id="alert"
    >
      <div className="flex items-center justify-center h-[40px] ">
        <div className={`bg-${alert.color}-500 w-3 h-full rounded-l-sm`}></div>
        <div className={`text-[14px] text-${alert.color}-700 font-medium bg-${alert.color}-100 w-full h-full flex items-center pl-4 border-y border-${alert.color}-200 tracking-wide`}>
          {alert.msg}
        </div>
        <button
          className={`text-[14px] text-${alert.color}-700 px-2 font-medium bg-${alert.color}-100 h-full flex items-center border-y border-r border-${alert.color}-200 cursor-pointer rounded-r-sm`}
          onClick={hideAlert}
        >
          <i
            className="fa-solid fa-xmark h-4 w-4 flex items-center justify-center
        "
          ></i>
        </button>
      </div>
    </div>
  );
}

export default Alert;
