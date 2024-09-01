import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Notes from "./Notes";
import { API } from "../api";
import randomColor from "randomcolor";

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    appear();
  }, [showNotes]);

  const appear = () => {
    setCurrentIdx(0);
    for (let i = 0; i < notes.length; i++) {
      setTimeout(() => {
        setCurrentIdx(i + 1);
      }, i * 100);
    }
    setShowNotes(false);
  };

  const fetchnotes = async () => {
    const url = `${API}/api/fetchnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: sessionStorage.getItem("authtoken"),
      },
    });
    const data = await response.json();
    const newNotes = data.map((note) => {
      return {
        id: note._id,
        title: note.title,
        description: note.description,
        date: note.date,
        color: randomColor(),
      };
    });
    setNotes(newNotes);
    setShowNotes(true);
  };
  useEffect(() => {
    fetchnotes();
  }, []);

  const addNewNote = () =>{
    var color = randomColor();
    setNotes((prev)=>{
      const newNotes = [{id:"", title:"", description:"", date:"", color: color},...prev];
      return newNotes
    })
    setShowNotes(true)
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Sidebar
        setNotes={setNotes}
        appear={appear}
        setShowNotes={setShowNotes}
      />
      <Notes notes={notes} setNotes={setNotes} currentIdx={currentIdx} />

      {/* Add note btn for mobile */}
      <button className="fixed bottom-[4.5rem] right-8 block md:hidden" onClick={addNewNote}>
        <div className="text-xl text-white bg-[#78c454] relative p-4 rounded-full hover:rotate-90 duration-200 cursor-pointer">
          <i className="fa-solid fa-plus absolute h-full w-full top-0 left-0 flex items-center justify-center"></i>
        </div>
      </button>
    </div>
  );
}

export default Dashboard;
