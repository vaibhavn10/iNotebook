import { useEffect, useState } from "react";
import Card from "./Card";
import createNote from "../assets/createNote.png";

function Notes({ notes, setNotes, currentIdx }) {
  return (
    <div className="md:pl-[99px]">
      <div className="px-4 xs:px-8 sm:px-12 md:px-16 py-4">
        <input
          type="text"
          className="w-full md:w-1/2 text-sm font-medium px-2 placeholder:text-stone-600 border-0 border-stone-500 ring-0 focus:ring-0 focus:border-[#78c454] border-b"
          placeholder="Search..."
        />
      </div>
      <div className="px-4 xs:px-8 sm:px-12 md:px-16">
        <div className="pt-6 pb-12 md:py-16 text-4xl md:text-6xl font-semibold">
          Notes
        </div>
        {notes.length == 0 && (
          <div className="w-full flex flex-col justify-center items-center">
            <img
              src={createNote}
              alt="create a new note"
              className="h-64 md:h-72"
            />
            <div className="text-xl md:text-2xl text-stone-600 font-semibold">
              Create a new note.
            </div>
          </div>
        )}
        {notes && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 md:gap-8 pb-16 relative">
            {[...notes.slice(0, currentIdx)].map((item, idx) => {
              return (
                <Card
                  item={item}
                  key={idx}
                  idx={idx}
                  notes={notes}
                  setNotes={setNotes}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notes;
