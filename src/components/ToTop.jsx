import React from "react";

function ToTop() {
  const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.documentElement.style.transitionDuration = "4s";
  };
  return (
    <button
      className="fixed bottom-8 hover:bottom-9 right-8 z-[5] text-white bg-[#90d474]/70 hover:bg-[#78c454]/90 rounded-full flex items-center justify-center w-8 md:w-10 h-8 md:h-10 duration-200 cursor-pointer"
      onClick={goToTop}
    >
      <i className="fa-solid fa-chevron-up h-4 w-4"></i>
    </button>
  );
}

export default ToTop;
