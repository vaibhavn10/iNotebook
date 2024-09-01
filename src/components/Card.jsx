import React, { useEffect, useState } from "react";

function Card({ item, idx, notes, setNotes }) {
  const [showFields, setshowFields] = useState(true);
  const [create, setCreate] = useState(true);
  const [edit, setEdit] = useState(true);
  const [title, setTitle] = useState(item.title ? item.title : "");
  const [desc, setDesc] = useState(item.desc ? item.desc : "");
  const [date, setDate] = useState(item.date ? item.date : "");
  const [color, setColor] = useState(item.color ? item.color : "red");
  const [show, setShow] = useState(false);

  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (date == "") {
      const newDate = new Date();
      let day =
        newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();
      let month = months[newDate.getMonth()].slice(0, 3);
      let year = newDate.getFullYear();
      return `${day}-${month}-${year}`;
    }
    const dateString = new Date(date);
    const day =
      dateString.getUTCDate() < 10
        ? `0${dateString.getUTCDate()}`
        : dateString.getUTCDate();
    const month = months[dateString.getUTCMonth()].slice(0, 3); // Months are zero-indexed, so add 1
    const year = dateString.getUTCFullYear();
    return `${day}-${month}-${year}`;
  };

  const handleCreate = () => {
    setCreate(false);
    setshowFields(false);
  };
  const handleEdit = () => {
    setEdit(false);
    setshowFields(false);
  };
  const createNote = async () => {
    const url = "http://localhost:3002/api/addnote";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: sessionStorage.getItem("authtoken"),
      },
      body: JSON.stringify({
        title: title,
        description: desc,
        date: new Date(),
      }),
    });

    const data = await response.json();
    console.log(data);

    const newNotes = notes.map((note, i) => {
      if (i == idx) {
        return {
          id: item.id,
          title: title,
          description: desc,
          date: new Date(),
          color: item.color,
        };
      }
      return note;
    });
    setNotes(newNotes);
    setCreate(true);
    setshowFields(true);
  };
  const saveEdit = async () => {
    console.log({
      title: title,
      description: desc,
      date: new Date()
    });
    console.log(item.id)
    const url = `http://localhost:3002/api/updatenote/${item.id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken: sessionStorage.getItem("authtoken"),
      },
      body: JSON.stringify({
        title: title,
        description: desc,
      }),
    });
    const data = await response.json();
    console.log(data);

    const newNotes = notes.map((note, i) => {
      if (i == idx) {
        return {
          id: item.id,
          title: title,
          description: desc,
          date: new Date(),
          color: item.color,
        };
      }
      return note;
    });
    setNotes(newNotes);
    setEdit(true);
    setshowFields(true);
  };

  useEffect(() => {
    setTitle(item.title || "");
    setDesc(item.description || "");
    setDate(item.date ? formatDate(item.date) : "");
    setColor(item.color || "white");
  }, [item, notes]);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 200 + idx * 100);
  }, [idx]);

  const deleteNote = async (idx) => {
    if(item.id){
      const url = `http://localhost:3002/api/deletenote/${item.id}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          authtoken: sessionStorage.getItem("authtoken"),
        },
      });
      const data = await response.json();
      console.log(data);
    }
    document.getElementById(`card-${idx}`).style.animation =
      "slideOut 0.2s ease-in-out forwards";
    setTimeout(() => {
      setNotes((prev) => {
        const newNotes = [...prev];
        newNotes.splice(idx, 1);
        return newNotes;
      });
      document.getElementById(`card-${idx}`).style.animation =
        "slideIn 0.05s ease-in-out forwards";
    }, 200);
  };

  return (
    <div
      className={`flex flex-col rounded-lg bg-[${
        item.color
      }]/45 px-2 py-4 md:p-4 sm:h-64 md:h-72 gap-2 md:gap-4 text-gray-900 relative ${
        show ? "slide-in" : "opacity-0"
      }`}
      id={`card-${idx}`}
    >
      <input
        type="text"
        className={`text-base md:text-lg text-gray-800 font-semibold border-0 rounded-md ${
          showFields ? "" : "px-1 md:px-2 bg-white/20 text-gray-900"
        } ring-0 focus:ring-0 focus:border-0 bg-transparent placeholder:text-gray-700 duration-200`}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        style={{
          boxShadow: `${edit ? "" : "0px 0px 5px 1px rgba(0,0,0,0.05)"}`,
        }}
        disabled={showFields}
        placeholder="Title"
        required
      />
      <textarea
        type="text"
        className={`text-sm md:text-base text-gray-700 font-medium flex-1 border-0  rounded-md ${
          showFields ? "" : "px-1 md:px-2 bg-white/20 text-gray-800"
        } ring-0 focus:ring-0 focus:border-0 bg-transparent placeholder:text-gray-700 duration-200`}
        value={desc}
        onChange={(e) => {
          setDesc(e.target.value);
        }}
        style={{
          resize: "none",
          boxShadow: `${edit ? "" : "0px 0px 5px 1px rgba(0,0,0,0.05)"}`,
        }}
        placeholder="Description..."
        disabled={showFields}
        required
      />
      <div className="text-sm md:text-base font-medium flex items-center justify-between">
        <div className="pl-2 text-sm text-gray-700 tracking-wide">
          {date ? formatDate(item.date) : ""}
        </div>
        {!(item.title && item.description) && (
          <div className="duration-700 relative w-10 h-10 flex items-center justify-center">
            <button
              onClick={handleCreate}
              className={`${
                create ? "z-[1]" : "z-[-1] opacity-0"
              } bg-gray-900 hover:bg-gray-900/80 text-white text-xs md:text-sm h-full w-full rounded-full absolute duration-200 cursor-pointer`}
            >
              <i className="fa-solid fa-plus flex items-center justify-center"></i>
            </button>
            <button
              onClick={() => {
                setTitle(item.title);
                setDesc(item.description);
                setDate(item.date?formatDate(item.date):"");
                setColor(item.color);
                setshowFields(true);
                setCreate(true);
              }}
              className={`${
                create ? "z-[-1] opacity-0" : "-left-12 z-[1]"
              } bg-white/90 hover:bg-white/70 text-gray-800 text-xs md:text-sm h-full w-full rounded-full absolute duration-200 cursor-pointer`}
            >
              <i className="fa-solid fa-xmark flex items-center justify-center"></i>
            </button>
            <button
              onClick={createNote}
              className={`${
                create ? "z-[-1] opacity-0" : "z-[1]"
              } bg-[#78c454] hover:bg-[#78c454]/80 text-white text-xs md:text-sm h-full w-full rounded-full relative duration-200 cursor-pointer`}
            >
              <i className="fa-solid fa-check flex items-center justify-center"></i>
            </button>
          </div>
        )}
        {item.title && item.description && (
          <div className="duration-700 relative w-10 h-10 flex items-center justify-center">
            <button
              onClick={handleEdit}
              className={`${
                edit ? "z-[1]" : "z-[-1] opacity-0"
              } bg-gray-900 hover:bg-gray-900/80 text-white text-xs md:text-sm h-full w-full rounded-full absolute duration-200 cursor-pointer`}
            >
              <i className="fa-solid fa-pen flex items-center justify-center"></i>
            </button>
            <button
              onClick={() => {
                setTitle(item.title);
                setDesc(item.description);
                setDate(formatDate(item.date));
                setColor(item.color);
                setshowFields(true);
                setEdit(true);
              }}
              className={`${
                edit ? "z-[-1] opacity-0" : "-left-12 z-[1]"
              } bg-white/90 hover:bg-white/70 text-gray-800 text-xs md:text-sm h-full w-full rounded-full absolute duration-200 cursor-pointer`}
            >
              <i className="fa-solid fa-xmark flex items-center justify-center"></i>
            </button>
            <button
              onClick={saveEdit}
              className={`${
                edit ? "z-[-1] opacity-0" : "z-[1]"
              } bg-[#78c454] hover:bg-[#78c454]/80 text-white text-xs md:text-sm h-full w-full rounded-full relative duration-200 cursor-pointer`}
            >
              <i className="fa-solid fa-check flex items-center justify-center"></i>
            </button>
          </div>
        )}
      </div>
      <button
        className="absolute -top-2 -right-2 bg-gray-900 hover:bg-gray-700 text-white text-xs md:text-sm p-2 rounded-full absolute duration-200 cursor-pointer"
        onClick={() => deleteNote(idx)}
      >
        <i className="fa-solid fa-trash h-4 w-4 flex justify-center items-center text-xs"></i>
      </button>
    </div>
  );
}

export default Card;
