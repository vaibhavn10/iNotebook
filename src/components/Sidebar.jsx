import React from "react";
import logo from "../assets/logo.png";
import randomColor from "randomcolor";

function Sidebar({ setNotes, setShowNotes }) {
  const addNewNote = () => {
    var color = randomColor();
    setNotes((prev) => {
      const newNotes = [
        { id: "", title: "", description: "", date: "", color: color },
        ...prev,
      ];
      return newNotes;
    });
    setShowNotes(true);
  };
  return (
    <div
      className="fixed -left[10%] md:left-0 h-screen border-r hidden md:flex flex-col items-center bg-white"
      id="sidebar"
    >
      <a href="/" className="py-6 px-3">
        {/* <div className="font-bold hover:scale-105 duration-200 cursor-pointer">
          iNotebook
        </div> */}
        <img src={logo} alt="..." className="h-6" />
      </a>
      <div className="mt-6 py-2 px-2 flex flex-col gap-1" onClick={addNewNote}>
        <div className="text-sm font-medium flex items-center justify-start bg-green-50 py-3 pl-2 pr-4 rounded-lg">
          Home
        </div>
        <div className="text-sm font-medium flex items-center justify-start bg-green-50 py-3 pl-2 pr-4 rounded-lg">
          About us
        </div>
      </div>
      <button className="mt-4 py-2 px-2" onClick={addNewNote}>
        <div className="text-xl text-white bg-[#78c454] relative p-5 rounded-full hover:rotate-90 duration-200 cursor-pointer">
          <i className="fa-solid fa-plus absolute h-full w-full top-0 left-0 flex items-center justify-center"></i>
        </div>
      </button>
      <div className="mt-4 relative profile">
        <button className="text-xl text-gray-800 bg-white border-2 border-gray-800 hover:bg-gray-800 hover:text-white relative p-5 rounded-full duration-200 cursor-pointer profilebtn">
          <i className="fa-solid fa-user absolute h-full w-full top-0 left-0 flex items-center justify-center"></i>
        </button>
        <div className="absolute top-2 pl-4 left-full overflow-hidden hidden profilemenu">
          <div className="max-h-40 w-32 flex flex-col text-sm font-medium border border-stone-200 rounded-sm bg-white overflow-y-scroll scrollbarnone z-[1]">
            <button className="pl-3 py-2 hover:bg-gray-100 cursor-pointer text-start border-b">
              My Profile
            </button>
            <button className="pl-3 py-2 hover:bg-gray-100 cursor-pointer text-start border-b">
              My Profile
            </button>
            <a
              href="/"
              onClick={() => {
                sessionStorage.clear();
              }}
              className="pl-3 py-2 hover:bg-gray-100 cursor-pointer text-start"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
